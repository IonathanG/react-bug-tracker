## React Bug Tracker Full Stack App with Redux Toolkit and Firestore

This react project is part of a series of individual apps built to showcase some of my personal Front End Development Skills.

The app Records bugs occurring in software development and tracks the issues.
Fully secured with authentication method and a Role Management System.
Professional UI / easy access to data / realtime data syncing Firestore.

Other projects can be found within the following Portolio website as well as on this GitHub Repositories.

<p float='left'>
<img src="/public/images/bug_tracker_screenshot.png" width="250" display='inline-block'>
<img src="/public/images/bug_tracker_screenshot_3.png" width="200" display='inline-block'>
<img src="/public/images/bug_tracker_screenshot_2.png" width="250" display='inline-block'>
</p>

## Project Overview & Features

A Bug Tracker App created with reactJS, recording bugs and tracking the issues.

The app contains the following features:

- Fully secured navigation with authentication method for any roles: Admin/Manager/Developer/Submitter
- Depending on your current role, an access to extra functionalities and informations on the app
- A Register/Login option for the user to create a personalised account (Firebase and Context API)
- A Login option for Demo User allowing a quick demonstration using one of the 4 Roles
- A synchronised data flow on all project/ticket
- Create a new Project and Assign or Remove a Project Manager from it
- Edit the Project details and add/remove members from it
- Archive, Retrieve and Delete a Project
- Create a new Ticket, edit the Ticket and Assign a developer to it
- Archive, Retrieve and Delete a Ticket
- Receive Live Notifications when assigned a Project and a Ticket
- Check out Profiles and Informations of all Members
- Assign a new Role to a member and change its security clearance (Admin only)
- Live Search in all Tables for the informations
- Change the Theme of the App Light/Dark options

## Scenario: Authorizations and User Roles

<img src="public/images/Role Authorizations_Schema.png" width="500" height="700">

## Tech/framework used

<b>Built with</b>

- [reactJS](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Context API](https://reactjs.org/docs/context.html)
- [React-Hook-Form](https://react-hook-form.com/)
- [React-Tables](https://www.npmjs.com/package/react-data-table-component)
- [Firebase & Firestore](https://firebase.google.com/)
- [Material UI](https://mui.com/)

## Code Feature

Load Firestore into Redux Toolkit with AsyncThunk and extraReducers (user not logged in):

```javascript
export const getUserData = createAsyncThunk(
  "data/getUserData",
  async (userID) => {
    const docRef = doc(db, "users", `${userID}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const storedData = window.localStorage.state
        ? JSON.parse(localStorage.getItem("state"))
        : undefined;

      localStorage.removeItem("state");
      return { dataDB: docSnap.data(), storedData };
    } else {
      console.log("No such document");
    }
  }
);
```

```javascript
extraReducers: {
 [getGuestData.pending]: (state) => {
      state.initUser = false;
    },
    [getGuestData.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.listItems = payload.listItems;
        state.totalQuantity = payload.totalQuantity;
        state.wishList = payload.wishList;
      }
      state.initUser = true;
    },
    [getGuestData.rejected]: (state) => {
      state.initUser = false;
    },
  }
```

## Installation

Use the package manager npm to install the app once project is downloaded.

For dependencies

```bash
npm install
```

## Launch the App

```javascript
npm start

```

## How to use?

For an easy start, click on the following link to access the live website:
https://react-ecommerce-ionyshop.netlify.app/

- Start by browing the website items, add a few products to the shopping cart and some others to the wishList.
- Each product of different color and size will be shown as a different item in your cart.
- The cart will persist if the page is reloaded or closed.
- Now register a new account or log in on an account.
- The items added while being signed out will be added to any pre existing cart.
- Proceed to checkout. Retrieve your purchase history.
- Subscribe to the Newsletter by adding your email to the form

## Contribute

Any contributions is welcome! Please suggest any new feature, suggestion or improvement and they will be implemented.
Thank you for the support.

## Credits

I would like to thank:

- Lama Dev for the UI inspiration
- The Net Ninja for the practical use of Firestore V9

## Created by

() => © [Ionathan](https://github.com/IonathanG)
