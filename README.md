# reactjs-twitch-remake

Basic streaming service remake practicing my reactjs + redux programming

# Start up

1) Need two terminals for both `client` and `api`
2) go to `api` folder and start server `npm start`
3) With second terminal navigate to the `client` folder and run `yarn start`
4) To get the login services to work you will require a google OAuth key (I leveraged google login) 
    - Rename `.env.sample` -> `.env` (`mv .env.sample .env`)
    - Open .env file and Replace:`<PUT_YOUR_KEY_HERE>` With your google key
    - Guide:[https://developers.google.com/adwords/api/docs/guides/authentication]
5) If you setup your google OAuth key restart the `client` server to pick up changes.

# Navigation 

## Working Pages all pages are WIP
I Did not finish development yet
- /streams/new (WIP)
- / (WIP)
