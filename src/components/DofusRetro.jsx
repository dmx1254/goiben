import React, { useState } from "react";
import { useSelector } from "react-redux";

const DofusRetro = () => {
  const { user } = useSelector((state) => state.user);
  const { servers } = useSelector((state) => state.servers);

  const [data, setData] = useState(
    servers.filter((server) => server.serverCategory === "dofus-retro")
  );
  const { language } = useSelector((state) => state.language);

  const { eurorate } = useSelector((state) => state.eurorate);
  const { dollarate } = useSelector((state) => state.dollarate);
  const { usdtra } = useSelector((state) => state.usdtra);
  const { cnyrate } = useSelector((state) => state.cnyrate);

  return (
    <div className="dofus-retro">
      <h1 className="dofus-retro-title">Dofus Retro</h1>
      <table id="retro">
        <thead>
          {language === "anglais" ? (
            <tr>
              <th>Server</th>
              <th>
                <div className="divider">
                  <span>Price</span>
                  <span>(DH)</span>
                </div>
              </th>
              <th>
                <div className="divider">
                  <span>USDT</span>
                  <span>(TRC20)</span>
                </div>
              </th>
              <th>
                <div className="divider">
                  <span>Paypal</span>
                  <span>(EURO)</span>
                </div>
              </th>
              <th>
                <div className="divider">
                  <span>Skrill</span>
                  <span>(EURO)</span>
                </div>
              </th>
              <th>
                <div className="divider">
                  <span>Paylib</span>
                  <span>(EURO)</span>
                </div>
              </th>
              <th>
                <div className="divider">
                  <span>Sepa</span>
                  <span>(EURO)</span>
                </div>
              </th>
              <th>
                <div className="divider">
                  <span>Payeer</span>
                  <span>(EURO)</span>
                </div>
              </th>
              <th>Status</th>
            </tr>
          ) : (
            <tr>
              <th>Serveur</th>
              <th>
                <div className="divider">
                  <span>Prix</span>
                  <span>(DH)</span>
                </div>
              </th>
              <th>
                <div className="divider">
                  <span>USDT</span>
                  <span>(TRC20)</span>
                </div>
              </th>
              <th>
                <div className="divider">
                  <span>Paypal</span>
                  <span>(EURO)</span>
                </div>
              </th>
              <th>
                {" "}
                <div className="divider">
                  <span>Skrill</span>
                  <span>(EURO)</span>
                </div>
              </th>
              <th>
                <div className="divider">
                  <span>Paylib</span>
                  <span>(EURO)</span>
                </div>
              </th>
              <th>
                <div className="divider">
                  <span>Sepa</span>
                  <span>(EURO)</span>
                </div>
              </th>
              <th>
                <div className="divider">
                  <span>Payeer</span>
                  <span>(EURO)</span>
                </div>
              </th>
              <th>Status</th>
            </tr>
          )}
        </thead>
        {language === "anglais" ? (
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.serverName}</td>
                <td>{item.serverPriceDh}Dhs/M</td>
                <td>{(item.serverPriceDh / usdtra).toFixed(2)}Usdt/M</td>
                <td>{(item.serverPriceDh / eurorate).toFixed(2)}€/M</td>
                <td>{(item.serverPriceDh / eurorate).toFixed(2)}€/M</td>
                <td>{(item.serverPriceDh / eurorate).toFixed(2)}€/M</td>
                <td>{(item.serverPriceDh / eurorate).toFixed(2)}€/M</td>
                <td>{(item.serverPriceDh / eurorate).toFixed(2)}€/M</td>
                <a href="javascript:void(Tawk_API.toggle())">
                  <td
                    className={
                      item.serverStatus === "Disponible"
                        ? "success"
                        : item.serverStatus === "Stock complet"
                        ? "no-success"
                        : "quickly"
                    }
                  >
                    {item.serverStatus === "Disponible" && "Clic here to sell"}
                    {item.serverStatus === "Stock complet" && "Full Stock"}
                    {item.serverStatus === "Vendre rapidement" &&
                      "Sell quickly"}
                  </td>
                </a>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.serverName}</td>
                <td>{item.serverPriceDh}Dhs/M</td>
                <td>{(item.serverPriceDh / usdtra).toFixed(2)}€/M</td>
                <td>{(item.serverPriceDh / eurorate).toFixed(2)}€/M</td>
                <td>{(item.serverPriceDh / eurorate).toFixed(2)}€/M</td>
                <td>{(item.serverPriceDh / eurorate).toFixed(2)}€/M</td>
                <td>{(item.serverPriceDh / eurorate).toFixed(2)}€/M</td>
                <td>{(item.serverPriceDh / eurorate).toFixed(2)}€/M</td>
                <a href="javascript:void(Tawk_API.toggle())">
                  <td
                    className={
                      item.serverStatus === "Disponible"
                        ? "success"
                        : item.serverStatus === "Stock complet"
                        ? "no-success"
                        : "quickly"
                    }
                  >
                    {item.serverStatus === "Disponible"
                      ? "Cliquer ici pour vendre"
                      : item.serverStatus}
                  </td>
                </a>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default DofusRetro;
