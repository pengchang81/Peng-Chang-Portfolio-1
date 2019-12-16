$("#emailsubmit").click(function () {
    if ($("#email").val() && $("#subject").val() && $("#emmessage").val() && $("#name").val() != null) {
        Email.send({
            SecureToken: "f919f1b4-7c88-4809-b61b-969889efc85d",
            To: 'pengchang81@yahoo.com',
            From: $("#email").val(),
            Subject: $("#subject").val(),
            Body: "From " + $("#name").val() + ": <BR> <BR> " + "Message:" + $("#emmessage").val()
        }).then(
           $("sendmessage").addClass("show")
        
        );
    }
    else {
        $("errormessage").addClass("show");
    }
});