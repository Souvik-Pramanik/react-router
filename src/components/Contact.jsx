const Contact = () =>
    {
        return(
    <>
        <div className="contact">
            <img src="images/contact.jpg" />
        </div>
            <div className="contact-heading">
                <h1>Contact Us</h1>
            </div>
                <div className="container">
                    <form action="#" method="GET">
                        <input type="text" id="fname" name="firstname" placeholder="Your First name.."/><br/><br/>
                        <input type="text" id="lname" name="lastname" placeholder="Your Last name.."/><br/><br/>
                        <select id="country" name="country">
                        <option value="select">Select Your Country...</option>
                        <option value="india">India</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                        </select><br/><br/>
                        <textarea id="subject" name="subject" placeholder="Write something.."></textarea><br/><br/>
                        <input id = "button" type="submit" value="Submit"/>
                    </form>
                </div>
    </>
        )
    }
    export default Contact;