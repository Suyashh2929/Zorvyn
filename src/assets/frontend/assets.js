import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import user from './user.jpg'
import main_logo from './main_logo.png'
import Energy from './Energy.png'
import Healthcare from './Healthcare.png'
import Tech from './tech.png'
import Crypto from './crypto.png'
import Retail from './Retail.png'
import user96 from './user96.png'
import Finance from './Finance.png'
import search from './search_icon.png'
import notif from './notif.png'

export const assets = {
    search,
    notif,
    appointment_img,
    header_img,
    group_profiles,
    user96,
    logo,
    chats_icon,
    verified_icon,
    user,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    main_logo,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

// Internal Fintech Data
const marketSectors = [
    { speciality: 'Technology', image: Tech },
    { speciality: 'Crypto', image: Crypto },
    { speciality: 'Energy', image: Energy },
    { speciality: 'Finance', image: Finance },
    { speciality: 'Retail', image: Retail},
    { speciality: 'Healthcare', image: Healthcare },
]

const topAssets = [
    {
        _id: 'doc1',
        name: 'Nvidia Corp',
        ticker: 'NVDA',
        image: doc1,
        speciality: 'Technology',
        degree: 'NASDAQ',
        experience: 'Growth: +140%',
        about: 'Global leader in AI computing and GPU manufacturing.',
        fees: 124.50,
        address: { line1: 'Santa Clara', line2: 'California, US' }
    },
    {
        _id: 'doc2',
        name: 'Bitcoin',
        ticker: 'BTC',
        image: doc2,
        speciality: 'Crypto',
        degree: 'COINBASE',
        experience: 'Growth: +65%',
        about: 'Decentralized digital currency and store of value.',
        fees: 64200.00,
        address: { line1: 'Digital Ledger', line2: 'Global Network' }
    },
    // Adding a 3rd one for variety
    {
        _id: 'doc3',
        name: 'Tesla Inc',
        ticker: 'TSLA',
        image: doc3,
        speciality: 'Technology',
        degree: 'NASDAQ',
        experience: 'Growth: -12%',
        about: 'Electric vehicles and sustainable energy solutions.',
        fees: 180.20,
        address: { line1: 'Austin', line2: 'Texas, US' }
    }
]
export const specialityData = marketSectors;
export const screener = topAssets;