1- node

2- create folder

3- npm init -y

4- npm install tailwindcss @tailwindcss/cli

5- create "src" folder

6- create input.css file inside src folder

7- add `@import "tailwindcss";` inside input.css

8- add this in html: <link href="./src/output.css" rel="stylesheet">

9- run this in cmd: npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch