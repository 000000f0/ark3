import React from 'react';

const MintPage: React.FC = () => {
  return (

    <div className='main3'>
  <center>
    <table className='nft-table'>
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
          <td className='nft-description'></td>
        </tr>
        <tr>
          <td className='nft-button-cell'>
            <button className="buy-now-button">BUY NOW</button>
          </td>
        </tr>
        <tr>
          <td className='nft-button-label'>button</td>
        </tr>
        <tr>
          <td className='nft-text-label'>text</td>
        </tr>
      </tbody>
    </table>
  </center>
</div>


  );
};

export default MintPage;
