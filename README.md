# uitest

Tested on Chrome and Safari including android chrome.

## Prerequisites
Node/npm

## Install/Run

Live Demo: http://royb.run:3000

Once cloned simply run `npm install`

To run `npm start` then direct browser to localhost:3000

### Admin functions
Clicking the settings cog, opens a basic test admin panel.

Clicking 'Add User' adds a user.

To remove user, type the name (case-sensitive) in the remove user text box and hit enter.

To add messages type the number of messages in the add messages text box and hit enter.

### Design decisions
To keep it simple and quick to get up and running I decided to go with node.js/express.

Using jade and stylus as html and css preprocessors and vanilla javascript with jquery for the code.

Since this was just a mockup, I didn't want to put much time into the script side of things, 
as in production this would be handled by a proper server backend.

The design is also very simple, featuring only messages, and chat join/leave notifications.

The main feature I would like to have added was the ability to expand the user list in small screen mode to see the names.
Also with a few more hours on it, I would probably have added an image/url preview in the messages.

Direct user messages are something I would add if I were to use this in production somewhere, 
possibly converting the header bar into a tab bar to show the different chats.
