function SendEmail() {
    if ($("#cemail").val() && $("#csubject").val() && $("#cemmessage").val() && $("#cname").val() != null) {
        Email.send({
            SecureToken: "8f08b458-7243-4f07-a13e-a97bacb1a9d5",

            To: 'pengchang81@yahoo.com',
            From: $("#cemail").val(),
            Subject: $("#csubject").val(),
            Body: "From " + $("#cname").val() + ": <BR> <BR> " + "Message:" + $("#cemmessage").val()
        }).then(
           $("sendmessage").addClass("show")
        
        );
    }
    else {
        $("errormessage").addClass("show");
    }
};

//Dan Token
//384fcf19-3202-46d3-ad60-19643ed4f02d
//My Token
//f919f1b4-7c88-4809-b61b-969889efc85d