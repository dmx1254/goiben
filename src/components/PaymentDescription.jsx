import React from "react";

import skrill from "../assets/skrill.png";
import paypal from "../assets/paypal.png";
import payeer from "../assets/payeer.png";
import bank from "../assets/bank.png";

import { useSelector } from "react-redux";

const PaymentDescription = () => {
  const { language } = useSelector((state) => state.language);

  return language === "anglais" ? (
    <div className="secure-payment">
      <h1 className="secure-payment-title">Secure payment</h1>
      <p className="secure-payment-intro">
        Our mission is to provide you with a pleasant shopping experience. Thus,
        we work with the best online payment systems. to ensure that any payment
        made on iBendouma is 100% secured. These trusted partners, whose
        reputation is second to none do, are listed below:
      </p>
      <div className="methode-of-payment">
        <span>Pay With Skrill </span>
        <img src={skrill} alt="skrill" />
        <p>
          Skrill, one of the world's leading digital payment companies with over
          36 million account holders, enables payments as well as internet
          transfers since 2001. Its services are used in over 200 countries and
          40 low-cost currencies, and always securely. Skrill protects your
          information personal finances and makes your online payments simple,
          fast and safe.{" "}
        </p>
      </div>
      <div className="methode-of-payment">
        <span>Pay with PayPal </span>
        <img src={paypal} alt="paypal" />
        <p>
          PayPal is the undisputed leader in online payments, with over 100
          million accounts in 190 countries around the world. PayPal has earned
          the trust of its buyers and sellers by offering a very high security,
          and is used by trading platforms reputable like eBay..
        </p>
      </div>
      <div className="methode-of-payment">
        <span>Pay by credit card </span>
        <img src={bank} alt="card" />
        <p>
          Payment by credit card on iBendouma is completely secure. If your bank
          has implemented the authentication protocol that strengthens the
          security of online payments, you will be invited to provide additional
          personal information (your date of birth for example).
        </p>
      </div>
      <div
        className="methode-of-payment"
        style={{
          marginBottom: "20px",
        }}
      >
        <span>Pay By Payeer</span>
        <img src={payeer} alt="blue" className="payeer" />
        <p>
          Payeer can be your favorite choice due to its flexibility and its low
          fees. Do you prefer to pay by fiat currency, by cryptocurrency, or
          does it depend on the situation? In any of these cases, Payeer can be
          a good fit, thanks to all the options it offers and its competitive
          prices.
        </p>
      </div>
    </div>
  ) : (
    <div className="secure-payment">
      <div className="methode-of-payment">
        <span>Payer Avec Skrill </span>
        <img src={skrill} alt="skrill" />
        <p>
          Skrill, une des principales soci??t??s de paiements num??riques au monde
          avec plus de 36 millions de titulaires de compte, permet des paiements
          ainsi que des transferts par Internet depuis 2001. Ses services sont
          utilis??s dans plus de 200 pays et 40 devises ?? faibles co??ts, et
          toujours de mani??re s??curis??e. Skrill prot??ge vos informations
          financi??res personnelles et rend vos paiements en ligne simples,
          rapides et s??rs.{" "}
        </p>
      </div>
      <div className="methode-of-payment">
        <span>Payez avec PayPal </span>
        <img src={paypal} alt="paypal" />
        <p>
          PayPal est le leader incontest?? des paiements en ligne, avec plus de
          100 millions de comptes dans 190 pays ?? travers le monde. Paypal a
          gagn?? la confiance de ses acheteurs et vendeurs en offrant une tr??s
          grande s??curit??, et est utilis?? par des plates-formes de transactions
          r??put??es comme eBay.
        </p>
      </div>
      <div className="methode-of-payment">
        <span>Payer par carte de cr??dit </span>
        <img src={bank} alt="card" />
        <p>
          Le paiement par carte de cr??dit sur iBendouma est enti??rement
          s??curis??. Si votre banque a mis en place le protocole
          d'authentification qui renforce la s??curit?? des paiements en ligne,
          vous serez invit??(e) ?? fournir des renseignements personnels
          suppl??mentaires (votre date de naissance par exemple).
        </p>
      </div>
      <div
        className="methode-of-payment"
        style={{
          marginBottom: "20px",
        }}
      >
        <span>Payer Par Payeer </span>
        <img src={payeer} alt="blue" className="payeer" />
        <p>
          Payeer peut ??tre votre choix favoris pour sa flexibilit?? et ses
          faibles frais. Vous pr??f??rez payer par monnaie fiat, par
          cryptomonnaie, ou cela d??pends des situations? Dans tous les cas, vous
          pourrez trouver chaussure ?? votre pieds chez Payeer gr??ce ?? toutes les
          options qu???il offre et ses prix comp??titifs.
        </p>
      </div>
    </div>
  );
};

export default PaymentDescription;
