import React from 'react';
import { Link } from 'react-router-dom';

type MintPageProps = {
  isDark: boolean;
};

const MintPage: React.FC<MintPageProps> = ({ isDark }) => {
  return (

    <div className='mint' style={{ backgroundColor: isDark ? '#000' : '#fff'}}>
  <center>
    <table className='nft-table' style={{ backgroundColor: isDark ? '#000' : '#fff', border: isDark ? '1px solid white':'1px solid black', boxShadow: !isDark ?  '0 0 10px rgba(0, 0, 0, 0.5)':'0 0 10px rgba(255, 255, 255, 0.5)'}}>
      <tbody>
        <tr>
          <td>Pugly, the pug</td>
        </tr>
        <tr>
          <td className='nft-image-cell'>
            <img style={{ height: '300px' }} className='nft-image' src='https://amplify-amplifya785c969872c4-staging-111600-deployment.s3.amazonaws.com/pugly.jpeg' />
          </td>
        </tr>
        <tr>
          <td className='nft-price'>$1</td>
        </tr>
        <tr>
          <td className='nft-quantity'>0/100 sold</td>
        </tr>
        
        <tr>
          <td className='nft-button-cell'>
            <button >Mint</button>
          </td>
        </tr>
        <tr>
          <td className='nft-button-cell'>
            <button >Connect Wallet</button>
          </td>
        </tr>
        <tr>
          <td className='nft-description'>

          No expertise in crypto required to get started.
*$199 is approximate dependent on Eth Price.
T&C's Apply. 
This is not financial advice.
Maximum 5 NFT's per transaction.



          </td>
        </tr>
       
      </tbody>
    </table>
  </center>
</div>


  );
};

export default MintPage;
