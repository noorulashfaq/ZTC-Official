import React from 'react';
import tietoEvry from '../Images/tietoEvryLogo.png'
import mobiezy from '../Images/mobiezyLogo.png'
import lnt from '../Images/ltInfotechLogo.PNG'
import hp from '../Images/hpLogo.jfif'
import dlithe from '../Images/dlitheLogo.jfif'
import igenix from '../Images/igenix.jfif'
const clients = [
  {
    id: 1,
    name: "TietoEvry",
    logo: tietoEvry // If you have the logo image, you can import it here
  },
  {
    id: 2,
    name: "Mobiezy Pvt Ltd",
    logo: mobiezy
  },
  {
    id: 3,
    name: "L&T Infotech",
    logo: lnt // Assign the imported logo image
  },
  {
    id: 4,
    name: "HP",
    logo: hp
  },
  {
    id: 5,
    name: "DLithe",
    logo: dlithe
  },
  {
    id: 6,
    name: "Igenik Infoway",
    logo: igenix
  }
];

const ClientsPage = () => {
  return (
    <div className="clients-page-container">
      <div className="clients-section">
        <h2 style={{textAlign:"center",color:"#0c83c8"}}>Our Clients</h2>
        <div className="clients-grid">
          {clients.map(client => (
            <div key={client.id} className="client-box">
              <div className="logo">
                {client.logo && <img style={{width:"100%"}} src={client.logo} alt={client.name} />} {/* Render the logo if available */}
              </div>
              {/* <div className="name">{client.name}</div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;
