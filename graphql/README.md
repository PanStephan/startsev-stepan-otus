mutations: 

``` graphgl
  mutation addClient($name: String!, $email: String!, $active: Boolean!) {
    addClient(name: $name, email: $email, active: $active) {
      name, 
      email, 
      active
    }
  }
```

queries: 

``` graphgl
  query Client($id: ID) {
    clients(id: $id) {
      name
    }
  }
```

``` graphgl
  query Client($id: ID) {
  clients(id: $id) {
    name,
    product {
      name
		}
  }
} 
```