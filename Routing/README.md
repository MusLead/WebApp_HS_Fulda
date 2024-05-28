Problem with bootstrap

> The path is /blog/newPost the bootstrap is not being rendered.

Solved! the path within the blogpost.ejs should be renamed such as
` http://localhost:3000/stylesheets/css/bootstrap.min.css `
not only 
` /stylesheets/css/bootstrap.min.css `

If you do not know what happen, you could open the console see if the path that the browser is being used is coorect!