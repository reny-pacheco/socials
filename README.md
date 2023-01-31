# Social Links Page

Displays your social links

![alt Sample Page](./public/images/sample.png)

### Adding your own page

1. Fork the repository.

2. Create your own branch.

3. Modify the `users.json` file located in the `/db` folder.

4. Add your information to the array as an object.

```json
//example


[
    {
        ...old values
    },
    // your data here
    {
        "username": "john-doe",
        "name": "John Doe",
        "bio": "CEO @ Doe Technologies",
        "image": "<your github image link>",
        "tags": ["javascript", "python", "linux", "java"],
        "socials": {
        "facebook": "#",
        "instagram": "#",
        "github": "#",
        "youtube": "#",
        "portfolio": "#",
        "linkedIn": "#"
        }
    }
]
```

5. Ensure that your username is unique and does not match any previous values in the file.

6. Create a `pull request`.

7. Once your pull request is merged into the master branch, your socials page will be generated during build time.
