# Test 1 (forgot password)

## We have to implement the forgot password functionality using @ngrx (as it's already done on login page), please, implement it and ensure you pass the following acceptance criteria:

- [ ] The existing `/forgot-password` page should have an input to write the username
- [ ] The existing `/forgot-password` page should have a button to request a link to change the users password
- [ ] The button has to be disabled unless the username input is filled
- [ ] The button has to show a loading spinner while we are waiting for the api response
- [ ] An API call to `https://httpbin.org/get/?username=<USERNAME>` has to be done when the user click the reset password button
- [ ] A success message has to be shown when the api call finishes

### How can I send my response?
- Fork this project
- Checkout `test1` branch
- Do your solution
- Create a merge request from your fork at test1 to this project at test1
