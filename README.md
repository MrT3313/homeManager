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

## Typography

## Colors

## Logo



# BE

## Routes

### Register New User

Functionality: 
- All passwords are hashed upon registrations

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




## User Profiles:
    StakeholderTree
    - Property Owner (everything)(mainAdmin)
    - Landlord (bills)(admin)

    Beneficiaries
    - Property Manager (maintenance)
    - Tenant(s)
    - Service (third party repair)
