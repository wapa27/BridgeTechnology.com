import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/send-email", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
public class SendEmailController {

    public ResponseEntity sendEmail(@RequestBody SimpleEmail simpleEmail) {
        System.out.println(simpleEmail.name);

    }
}
