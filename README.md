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

User Role Navigation => Redirect the User for unauthorized routes depending on its role

```javascript
const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/Unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/Login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
```

Protected Routes for different users roles => Admin, Project Manager, Developer and Submitter

```javascript
{
  /* ----- PROTECTED ROUTES -  LOGGED IN USERS ONLY ----- */
}
<Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
  {/* All logged in Users can access these routes */}
  <Route path="/" element={<HomeDashboard />} />

  <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.Manager]} />}>
    {/* Only ADMIN and PROJECT MANAGER can access these routes */}
    <Route path="/Projects/EditProject/:id" element={<EditProject />} />
  </Route>
</Route>;
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
https://bugtracker-ig.netlify.app/

- Start by Login on Demo User and see the different access/authorizations given to you depending on your role.
- Create a new ticket, a new project.
- Edit, Archive, Retrieve and Delete Tickets and Projects.
- Assign and edit Roles to users.
- Assign a project to a Manager and a ticket to a Developer.
- Check the inbox for a new project or ticket recently assigned.
- Check out any user profile and their current projects.
- Search for your own Project/Ticket.

## Contribute

Any contributions is welcome! Please suggest any new feature, suggestion or improvement and they will be implemented.
Thank you for the support.

## Credits

I would like to thank:

- Coder Foundry for the project inspiration
- Bootstrap for the UI design ideas

## Created by

() => © [Ionathan](https://github.com/IonathanG)
