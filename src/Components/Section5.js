import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
const Section5=()=>{
    return(
        <div className="section5">
            <h1>  Create And Sell your NFTs</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <AccountBalanceWalletIcon className='account'/>
                        <h3>1. SetupyourWallet</h3>
                        <p>Once You've Set Up Your Wallet Of Choice, Connect It To OpenSeaby Clicking The NFT Marketplacein The Topright Corner.</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <AccountBalanceWalletIcon className='account_second'/>
                        <h3>2. CreateyourCollection</h3>
                        <p>Once You've Set Up Your Wallet Of Choice, Connect It To OpenSeaby Clicking The NFT Marketplacein The Topright Corner.</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <CollectionsBookmarkIcon className='account_third'/>
                        <h3>3. Add Your NFTs</h3>
                        <p>Once You've Set Up Your Wallet Of Choice, Connect It To OpenSeaby Clicking The NFT Marketplacein The Topright Corner.</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <AccountBalanceWalletIcon className='account_four'/>
                        <h3>4. ListThemforSale</h3>
                        <p>Once You've Set Up Your Wallet Of Choice, Connect It To OpenSeaby Clicking The NFT Marketplacein The Topright Corner.</p>
                    </div>
                </div>
                <p>Join Our Mailing List To Stay In The Loop With Our Newest Feature Releases,<br/>NFT Drops, And Tips And Tricks For Navigating Xhibiter</p>
                <div className='subscribe'>
                    <input type="text"  placeholder="Email Address"/>
                    <button type='button' className="subscribe_button me-2">Subscribe</button>
                </div>
            </div>
        </div>
    )
}
export default Section5;