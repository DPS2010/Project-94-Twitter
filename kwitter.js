function namebtn () {
    user_name = document.getElementById("nameinput").value
 
    localStorage.setItem("user", user_name)
 
    window.location = "kwitter_page.html"
 }