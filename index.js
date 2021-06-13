fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => displayUser(json))

        function displayUser(users){
           
            const userNames = users.map( user => user.username);
            const ul = document.getElementById('users-name');
            for (let i = 0; i < userNames.length; i++) {
                const userName = userNames[i];
                const li = document.createElement('li');
                li.innerText = userName;
                ul.appendChild(li);
                
            }
            const emails = users.map( user => user.email);
            const ul2 = document.getElementById('users-email');
            for (let i = 0; i < emails.length; i++) {
                const userEmail =  emails[i];
                const li2 = document.createElement('li');
                li2.innerText = userEmail;
                ul.appendChild(li2);
                
            }

            
        }

        // Creating a resource
        
        const clickButton = document.getElementById('submit');
        clickButton.addEventListener('click', function(){
            const title = document.getElementById('title').value;
            const bodyContent = document.getElementById('body').value;
            const post = {title: title, body: bodyContent};
            postToServer(post);
        })

        function postToServer (postInfo){
            fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postInfo),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
        })
        .then((response) => response.json())
        .then((data) => console.log(data));
        }

        // Fun API
        function findTask(){
            fetch('http://www.boredapi.com/api/activity/')
        .then( res => res.json())
        .then( activity => {
            document.getElementById('activity').innerText = activity.activity;
        })
        }
        findTask();
        setInterval(() => {
            findTask();
        }, 5000);