# Using nexus as proxy repository server 

To publish an angular4 based component library you usually use angular modules. This example uses a simple dummy-component declared in a ng4 module. 


# Configure nexus for npm

1. Download, install and start nexus.
2. Login as admin or create a new user with permission.
3. Create - npm-internal - as hosted repository.
4. Create - npm-public - as proxy repository which points to https://registry.npmjs.org
5. Create - npm-all - as group using members of the afore created repositories. 
6. Add security realms - npm Bearer Token Realm - 

# Prepare Build 

1. Generate the AOT compilation
```
npm run ngc 
```
2. Start the build process based on AOT
```
npm run build
```

# npm client setup 

1. Configure the repository:

```
npm config set registry http://localhost:8081/repository/npm-all/
```

2. Login for publish:

```
npm login --registry=http://localvm:8081/repository/npm-internal/ 
```

3. Configure for publish:

```
npm publish --registry http://localvm:8081/repository/npm-internal/ 
```









