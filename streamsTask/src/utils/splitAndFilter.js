const fs = require('fs') 
const { sortNum, convertData } = require('./utils')

const _splitToStream = (outStreamCreate, fileStream, partitionStreamSize) => {
	const outStreams = [], { highWaterMark: defaultChunkSize } = fileStream._readableState
	let currentOutStream, currentFileSize = 0, fileStreamEnded = false, finishedWriteStreams = 0, openStream = false, partitionNum = 0 

	const endCurrentWriteStream = () => {
		currentOutStream.end() 
		currentOutStream = null 
		currentFileSize = 0 
		openStream = false 
	} 

	const writeStreamFinishHandler = () => {
		finishedWriteStreams++ 
	} 

	fileStream.on('readable', () => {
		let chunk
		while (null !== (chunk = fileStream.read(Math.min(partitionStreamSize - currentFileSize, defaultChunkSize)))) {
			if(openStream == false) {
				currentOutStream = outStreamCreate(partitionNum) 
				currentOutStream.on('finish', writeStreamFinishHandler) 
				outStreams.push(currentOutStream) 
				partitionNum++ 
				openStream = true 
			}

			currentOutStream
				.write(sortNum(convertData(chunk)).toString())

			currentFileSize += chunk.length 

			if(currentFileSize == partitionStreamSize) {
				endCurrentWriteStream() 
			}
		}
	}) 

	const end = new Promise((resolve, reject) => {
		fileStream.on('end', () => {
			if(currentOutStream) {
				endCurrentWriteStream() 
			}
			fileStreamEnded = true 
			resolve()
		})
		fileStream.on('error', reject)
	})

	return end
} 

const split = (fileStream, maxFileSize, rootFilePath) => {
	const end = _split(fileStream, maxFileSize, (n) => `${rootFilePath}-${n}.txt`)
	return end
}

const _split = (fileStream, maxFileSize, generateFilePath) => {
	if (maxFileSize <= 0) {
		throw new RangeError('maxFileSize must be greater than 0') 
	}

	const outStreamCreate = (partitionNum) => {
		let filePath = generateFilePath(partitionNum) 
		return fs.createWriteStream(filePath) 
	} 

	const end = _splitToStream(outStreamCreate, fileStream, maxFileSize)
	return end
} 

module.exports.split = split