-- INITIAL COMMIT --> BE_master

# homeManager
Welcome to Home Manager

## Table of Contents

- [Overview](#Overview)
- [KeyFeatures](#KeyFeatures)
- [FE](#FE)
- [BE](#BE)


# Overview


- Stakeholder: Landlord

- Description: Your one stop shop as a property owner to expense, monitor, maintain, and manage your properties

- Developer: Reed Turgeon

<br/>
<br/>

# KeyFeatures
- rent tracking
- rent alerts
- customer maintenance ticket
- maintenance admin ticket tracking & expensing
- project planning & tracking 

# FE 

- [Webflow Design](https://preview.webflow.com/preview/homemanager?utm_medium=preview_link&utm_source=designer&utm_content=homemanager&preview=e2c673f790e4f30e9a08f685c5ceb009&mode=preview)

- [Overview](#Overview)
- [KeyFeatures](#KeyFeatures)
- [FE](#FE)
    - [Typography](#Typography)
    - [Colors](#Colors)
    - [Logo](#Logo)
- [BE](#BE)

## Typography

## Colors

## Logo



# BE

- [Overview](#Overview)
- [KeyFeatures](#KeyFeatures)
- [FE](#FE)
- [BE](#BE)
    - [User Profiles](#UserProfiles)
    - [Routes](#Routes)

## UserProfiles:
    StakeholderTree
    - Property Owner (everything)(mainAdmin)
    - Landlord (bills)(admin)

    Beneficiaries
    - Property Manager (maintenance)
    - Tenant(s)
    - Service (third party repair)

## Routes

### Register New User

Functionality: 
- All passwords are hashed upon registration

Future Functionality: 
- Set input restrictions on user's pw entry
- Use Third Party Auth Service

```
Accepted Shape of Front End API call:
{
    lastName: "STRING",
    firstName: "STRING",
    userName: "STRING",
    pw: "STRING",
    adminCat: 1,
    jobCat: 1
}
```

### Login

Functionality:
- pw verification
- serves front end a JWT with payload:
    ```
    {
        userID: INTEGER,
        userName: 'STRING'
    }
    ```

```
Accepted Shape of Front End API call:
{
    userName: "STRING",
    pw: "STRING",
}
```



