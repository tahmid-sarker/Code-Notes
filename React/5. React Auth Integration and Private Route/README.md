# The Lesson We Have Learned

1. Create a context so that we can share the state of a User across the application.
2. Create a provider to re-use the context.
3. Set CreateUser via Context provided function.
4. Login user via context provided function.
5. Observe: one single place (inside the provider) ==> if the user state on firebase changes you can update the user information in your state.
6. use observer inside useEffect 
   6.1. ==> Set the observer one time
   6.2. ==> clean up memory after unmount