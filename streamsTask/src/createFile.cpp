#include <iostream> 
#include <stdlib.h>
#include <stdio.h>
#include <stdint.h>
#include <time.h>
 
char SYMBOLS[] = "0123456789  ";
// 100000000
static const int FILESIZE = 100000000 ; // 100mb
#define MIN(a, b) ((a) < (b) ? a : b)

unsigned char* generate_buffer(unsigned char* dest, unsigned len)
{
  unsigned char* ptr = dest;

  while (len--) 
  {
    *ptr++ = SYMBOLS[rand() % 11];
  }

  return dest;
}
 
bool create_file(const char* filename, int64_t filesize, unsigned buffer_size)
{
  if (!buffer_size || filesize <= 0) return false;
  FILE* fout = fopen(filename, "w+");
  if (!buffer_size || !fout) return false;
 
  unsigned char* buffer = (unsigned char*)malloc(buffer_size * sizeof(char));
  size_t size_to;
 
  do
  {
    size_to = MIN(buffer_size, filesize);
    generate_buffer(buffer, size_to);
    fwrite(buffer, 1, size_to, fout);
    filesize -= buffer_size;
  } while (filesize > 0);
 
  free(buffer);
  if (fout) fclose(fout);
  return true;
}
 
int main(int argc, char** argv)
{
  srand(time(0));
  create_file("./src/files/file.txt", FILESIZE, 8192);
  return 0;
}