import "./PrivacyPolicy.scss";
import TitleComp from "../../components/TitleComp/TitleComp";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function PrivacyPolicy() {
  return (
    <div className="policy">
      <TitleComp
        leftIcon={faChevronLeft}
        leftIconLabel="go back"
        state="show"
        title="Privacy Policy"
      ></TitleComp>
      <ol className="policy__list">
        <li>
          <h3 className="policy__list__text">
            Information Gathered by the audio.
          </h3>
          <p className="policy__list__description">
            audio gathers three basic types of information: (i) "Personal
            Information," that is information from which an individual can be
            identified; (ii) “Sensitive Personal Data and Information”, which
            includes personal information such as passwords, financial
            information, medical records and information as defined under the
            Information Technology (Reasonable Security Practices and Procedures
            and Sensitive Personal Information) Rules, 2011 (“SPDI Rules”); and
            (iii) "Aggregated Information," from which an individual cannot be
            identified;
          </p>
          <ul className="listitem">
            <li>
              <h4 className="listitem__text">personal information</h4>
              <p className="listitem__description">
                You are not ordinarily required to register or provide Personal
                Information in order to access the Website, though certain
                functionalities such as a membership program, through which
                purchasers of products may receive discounts on online
                purchases, participating in any contests, etc., may require
                registration. audio collects Personal Information from you only
                when you voluntarily provide it to audio - for example, in
                contacting audio through the Website, filling in the form for
                applying for a vacancy or while requesting for a visit to the
                manufacturing plant of audio, or exploring business
                opportunities with audio, answering surveys and polls, entering
                contests, sweepstakes, raffles and similar promotions, signing
                up for email updates and announcements concerning the audio’s
                products and special promotions, and purchasing the audio’s
                merchandise. Personal Information may include your contact
                information (such as your name, postal address, telephone
                numbers and/or email address), which will be collected if you
                wish to purchase any product or merchandise made available
                through the Website ("Transaction")
              </p>
            </li>
            <li>
              <h4 className="listitem__text">
                Sensitive Personal Data and Information
              </h4>
              <p className="listitem__description">
                We may also collect sensitive personal data or information
                (“SPDI") ”) about you when you access and use the Website,
                products or merchandise. By using the Website, or by purchase of
                any products or merchandise, or by providing us with the
                information, you consent to the storage, processing, transfer
                and disclosure of your Personal Information and SPDI in
                accordance with the terms of this Policy.{" "}
              </p>
            </li>
            <li>
              <h4 className="listitem__text">Aggregated Information. </h4>
              <p className="listitem__description">
                When you visit the Website, the audio and the third parties with
                whom the audio has contracted to provide services, may collect
                anonymous information from three sources: server log files,
                cookies, and pixel tags.
              </p>
            </li>
            <li>
              <h4 className="listitem__text">Server Log Files. </h4>
              <p className="listitem__description">
                Your Internet Protocol (IP) address is an identifying number
                that is automatically assigned to your computer by your Internet
                Service Provider (ISP). This number is identified and logged
                automatically in the audio’s server log files whenever you visit
                the Website, along with the time(s) of your visit(s) and the
                page(s) that you visited. IP addresses of all Visitors are used
                by the audio to calculate the Website usage levels, to help
                diagnose problems with the Website's servers, and to administer
                the Website. audio may also use IP addresses to communicate or
                to block access by Visitors who fail to comply with the Policy
                and/or the Terms and Conditions of Use of the Website.
                Collecting IP addresses is a standard practice followed on the
                Internet and is carried out automatically by many websites.
              </p>
            </li>
            <li>
              <h4 className="listitem__text">Cookies</h4>
              <p className="listitem__description">
                Cookies are data that a web server transfers to an individual's
                computer for record keeping purposes. Cookies are an industry
                standard used by most websites, and help facilitate users'
                ongoing access to and use of a particular website. Cookies do
                not cause damage to the computer system or files, and only the
                website that transfers a particular cookie to the computer
                system can read, modify or delete such cookie. If you do not
                want your information to be collected through the use of
                cookies, there is a simple procedure to be followed, in most of
                the browsers, by the user that allows the user to delete
                existing cookies, automatically decline cookies, or to be given
                the choice of declining or accepting the transfer of particular
                cookies to the user’s computer system. You should note, however,
                that declining cookies may make it difficult or impossible for
                you to access certain portions of the Website.
              </p>
            </li>
            <li>
              <h4 className="listitem__text">Pixel Tags</h4>
              <p className="listitem__description">
                The Website may use so-called "pixel tags," "web beacons,"
                "clear GIFs" or similar means (collectively, "Pixel Tags") to
                compile aggregate statistics about Website usage and response
                rates. Pixel Tags enables audio to maintain a count of the users
                who have visited certain pages of the Website. When used in
                HTML-formatted email messages, Pixel Tags can tell the sender
                whether and as to when the email was opened and read by the
                receiver of the e-mail.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <h3 className="policy__list__text">Communications.</h3>
          <p className="policy__list__description">
            {" "}
            audio encourages the Visitors to contact audio with questions and
            comments. Personal Information and SPDI may be used by audio in
            order to respond to the respective Visitor’s questions and comments.
          </p>
        </li>
        <li>
          <h3 className="policy__list__text">Business Purposes.</h3>
          <p className="policy__list__description">
            {" "}
            audio may also use the Personal Information and SPDI of its Visitors
            for internal business purposes, such as analysing and managing its
            businesses or maintenance of employee records. The Personal
            Information and SPDI collected may be combined with other
            information collected by audio via other online or offline sources,
            with demographic information and other information that is available
            in the public domain.
          </p>
        </li>
        <li>
          <h3 className="policy__list__text">Transactions.</h3>
          <p className="policy__list__description">
            {" "}
            When you take part in a Transaction through the Website such as
            purchasing products or merchandise, audio may collect Payment
            Information from you related to such Transaction as well as other
            Personal Information such as shipping address for shipping of the
            ordered products or merchandise purchased through the Website. audio
            may use your Personal Information or Payment Information in order to
            complete the Transaction and, if applicable, to fulfil your
            purchase. The Payment Information may also be shared with the third
            parties, as may be necessary, to complete your Transaction (for
            example, to process the payment made through the credit card).
          </p>
        </li>
        <li>
          <h3 className="policy__list__text">
            Contests, Competitions and Other Promotions.
          </h3>
          <p className="policy__list__description">
            {" "}
            From time to time, contests, competitions and similar promotions may
            be organized through its Website that may require online
            registration by the Visitor for participating in such contest,
            competition or promotion (which may include name, email, user ID and
            password). audio may ask you for certain Personal Information and
            SPDI during the process of registration for participating in such
            contest, competition or promotional schemes. audio may share this
            Personal Information and SPDI with third party sponsors of such
            contests, competitions and promotions (irrespective of whether it is
            hosted by audio), in accordance with the rules applicable to such
            contest, competition or promotion. You should carefully review the
            rules of each contest, competition and promotion in which you
            participate through the Website, as they may contain certain
            additional important information about audio or a sponsor's use of
            your Personal Information and SPDI. To the extent that the terms and
            conditions of such rules concerning the treatment of your Personal
            Information and SPDI enlarge the scope of use of such information in
            terms of this Policy, the terms and conditions of such rules shall
            also apply.
          </p>
        </li>
        <li>
          <h3 className="policy__list__text">
            Special Promotions and Product Information.
          </h3>
          <p className="policy__list__description">
            {" "}
            In addition, audio reserves the right to use your Personal
            Information and SPDI for sending you the e-mails or SMSes with
            updates and announcements concerning audio’s products and special
            promotions. You may opt-out of receiving these messages from audio
            at any time (see Section 5 “Choice” below).
          </p>
        </li>
        <li>
          <h3 className="policy__list__text">Critical Communications.</h3>
          <p className="policy__list__description">
            {" "}
            audio may from time to time and as may be necessary use your
            Personal Information and SPDI to send emails consisting of important
            information regarding the Website, your Transactions, or for
            notifying any amendments or modifications to the terms, conditions,
            and policies of audio with respect to use of this Website ("Critical
            Emails"). Since Critical Emails would consist of important
            information you shall not have the option to opt-out of receiving
            Critical Emails.
          </p>
        </li>
        <li>
          <h3 className="policy__list__text">Third Party Service Providers.</h3>
          <p className="policy__list__description">
            {" "}
            audio works with third parties who provide services, including
            website hosting, credit card processing, data analysis, newsletter
            services, promotional activities, other administrative services and
            other services which enhance user experience. audio may share your
            Personal Information, and SPDI, with such third parties, as may be
            necessary, for the purpose of enabling such third parties discharge
            the provision of such services. These third party service providers
            may be located within or outside India. Your Personal Information
            and SPDI may also be shared with the manufacturer of the products
            ordered/ purchased by you on the Website or with entities
            responsible for delivering the products ordered / purchased by you
            on the Website.
          </p>
        </li>
        <li>
          <h3 className="policy__list__text">Miscellaneous</h3>
          <p className="policy__list__description">
            {" "}
            audio may disclose your Personal Information and SPDI if audio
            believes that it is required to do so: (i) by law; (ii) to comply
            with legal process or governmental requests; (iii) to enforce the
            Terms and Conditions of Use; (iv) to protect our operations; (v) to
            protect the rights, privacy, safety or property of audio, you or
            others; and (vi) to enable itself to pursue the available remedies
            or limit the damages that it may sustain.
          </p>
        </li>
        <li>
          <h3 className="policy__list__text">Aggregated Information.</h3>
          <p className="policy__list__description">
            {" "}
            audio may analyse Aggregated Information in order to enhance the
            Website security, track the popularity of certain pages of the
            Website, track success of our email notifications, assess traffic
            levels on the Website and other usage data, all of which would help
            audio to provide content tailored to the interests of the consumers,
            improve the Website and related services and to otherwise enhance
            Visitor’s experience on the Website. audio may also share the
            Aggregated Information with its Other Entities and third parties for
            provision of such services or for completion of your Transactions on
            the Website, subject to the terms of this Policy.
          </p>
        </li>
      </ol>
    </div>
  );
}

export default PrivacyPolicy;
