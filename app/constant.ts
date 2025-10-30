import localFont from 'next/font/local'

import Banner3Img from "@/public/images/banner3.png"
import CountDownImg from "@/public/images/countdown3.png"
import Prize4Img from "@/public/images/prize7.jpg"
import HowToWinImg from "@/public/images/how-to-win3.png"
import LeaderboardImg from "@/public/images/leaderboard.png"
import CallToActionImg from "@/public/images/call-to-action.png"
import DeclarationImg from "@/public/images/declaration.png"
import ShoppingCartImg from "@/public/images/shopping-cart.png"
import GoldImg from "@/public/images/gold.png"
import SilverImg from "@/public/images/silver.png"
import CopperImg from "@/public/images/copper.png"
import JackpotImg from "@/public/images/jackpot.png"
import JackpotBookImg from "@/public/images/jackpot-book.png"

/**
 * 活动页面背景图片
 */
export const EVENT_BG_IMGS = {
    banner: Banner3Img,
    countdown: CountDownImg,
    prizes: Prize4Img,
    howToWin: HowToWinImg,
    leaderboard: LeaderboardImg,
    callToAction: CallToActionImg,
    declaration: DeclarationImg,
    jackpot: JackpotImg,
    jackpotBook: JackpotBookImg,
    shoppingCart: ShoppingCartImg,
    gold: GoldImg,
    silver: SilverImg,
    copper: CopperImg,
}

/**
 * 产品配置文件
 * 管理活动中展示的产品ID列表
 */

export const EVENT_PRODUCT_IDS = [
    "8744574288024",
    "8729796608152",
    "8744567013528",
    "8753963892888",
    "8797341057176",
    "8797337878680",
    "8797333323928",
    "8796219080856",
    "8796215771288",
    "8795356692632",
    "8763151057048",
    "8763326824600",
    "8763301429400",
    "8763143061656",
    "8797916954776",
    "8797926588568",
    "8797960667288",
    "8797959422104",
    "8797956243608",
    "8797955293336",
    "8797952606360",
    "8797945888920",
    "8797938712728",
    "8797928685720"
];

/**
 * FAQ数据 - 常见的抽奖相关问题
 */
export const FAQ_DATA = [
    {
        question: "What exactly do you have to buy to earn galaxy cards?",
        answer: "The following products qualify for one random Galaxy Card with purchases of USD 25, or a full non-duplicate set with purchases of USD 70. Limited quantity available, first come, first served.\nAET x Alien Stage - Mechanical Keycap Blind Box\nAlien Stage - Free Stage Series Plush Toy\nAET x Alien Stage - TWS Wireless Earphones\nAET x Alien Stage - Free Stage Silicon Earphone Case"
    },
    {
        question: "Is there a minimum spend threshold?",
        answer: "There is no minimum purchase requirement, but a spending threshold may apply to qualify for prizes or giveaways."
    },
    {
        question: "Are the galaxy/black/bunny cards: Random inside blind boxes?",
        answer: "For eligible orders, the card will be shipped together with the product."
    },
    {
        question: "Bonuses based on purchase amount? Exclusive to in-person purchases only?",
        answer: "Part of the bonuses are based on purchase amount, and part are randomly drawn. Customers who purchase event products during the event period will all have a chance to win prizes."
    },
    {
        question: "Is this a gacha system or fixed rewards?",
        answer: "The giveaway mostly follows a Gacha System. For example, The 1st prize will have 6 winners in total: 3 reserved for the top 3 highest-spending customers in the store, and 3 drawn randomly from all customers who made purchases during the event period.\nIf an autograph by the author is won during the pop-up store event, it will be given to the top spender. If we win two autographs, one will be given to the top spender and the other to a random winner. If there are three autographs, the second top spender will receive one, and so on."
    },
    {
        question: "Do the card suits mean sleeves?",
        answer: "No, it means the Small Card Set."
    },
    {
        question: "Does the Rabbit Series Blind Box come with photocards?",
        answer: "No, the Rabbit Series Blind box does not come with photocards."
    },
    {
        question: "How can buyers combine multiple orders into one shipment?",
        answer: "After the event ends, buyers can go to orderstatus.harum.io to request combined shipping and get a refund for excess shipping fees."
    },
    {
        question: "Is the anniversary popup official or just speculation?",
        answer: "The Malaysia pop-up event is officially organized by the brand; we are acting as the proxy buyer."
    },
    {
        question: "Is the merch Asia-only?",
        answer: "Harumio ships worldwide."
    },
    {
        question: "Where is the livestream happening, Instagram or Discord?",
        answer: "For any updates about the Malaysia pop-up event, please visit our social media channels including Instagram, Facebook, and Twitter under the name <b>harumiokorea.<b/>"
    }
];

export const FAQ_ANI = [
  {
    question: 'Which products are included in this event?',
    answer: 'All Alien Stage products are included in this event.'
  },
  {
    question: 'Will the official ANIPLUS × Alien Stage purchase bonuses still be included?',
    answer: 'Yes, it depends on how many bonus items we are able to secure through proxy purchases.'
  },
  {
    question: 'What kind of additional event-exclusive gifts will be available?',
    answer: 'The list of point redemption items will be updated regularly based on character points. Please stay tuned for announcements.'
  },
  {
    question: 'Do I need to spend a minimum amount to qualify for the gifts?',
    answer: 'There are different gift tiers. The entry-level tier requires only a small purchase amount.'
  },
  {
    question: 'How are the points calculated?',
    answer:
      'Every USD $10 spent = 1 point. All Alien Stage items are tagged with one of six characters, and points will automatically be allocated to the corresponding character when you place an order. Special promotions such as “Character Weeks” or selected discount items may earn double points.'
  },
  {
    question: 'How are points allocated for blind box products?',
    answer: 'Points from blind box items will be evenly distributed among all characters.'
  },
  {
    question: 'Are the event gifts limited in quantity?',
    answer: 'Yes. Availability depends on our stock, and the gift list will be adjusted accordingly.'
  },
  {
    question: 'Will gifts be shipped together with my order or separately?',
    answer: 'Gifts will be shipped together with your order. To redeem, you must select an unshipped order at checkout.'
  },
  {
    question: 'Can I choose which gift I receive?',
    answer: 'Yes, you can redeem gifts of your choice based on the points you’ve accumulated.'
  },
  {
    question: 'Is there a limit to how many gifts one customer can receive?',
    answer: 'No set limit — it depends on how many points you earn.'
  },
  {
    question: 'How long will this campaign run?',
    answer: '6 weeks.'
  },
  {
    question: 'Can I combine this event with discount codes or other promotions?',
    answer: 'Yes, you can combine the event with discount codes or promotions.'
  },
  {
    question: 'Can I place multiple orders?',
    answer: 'Yes, multiple orders are allowed.'
  },
  {
    question: 'If I place multiple orders, can they be combined and the shipping fee refunded?',
    answer: 'Yes, we support order consolidation during the campaign, and shipping fee differences will be refunded.'
  }
]


export const awareFont = localFont({
    src: "../public/fonts/AWAREBOLD-QZO3X.woff"
})

export const FUTURA_EXTRA_BLACK = localFont({
    src: '../public/fonts/FUTURA-EXTRA-BLACK-REGULAR.woff'
})

/**
 * 弹幕
 */
export const BarrageTextList = [
    { username: 'LunaSky', text: 'Love Alien Stage so much!' },
    { username: 'Neo', text: 'Till is my favorite!' },
    { username: 'DreamerX', text: 'Ivan\'s voice is perfect!' },
    { username: 'EchoMoon', text: 'Such beautiful music!' },
    {
        username: 'fummichoco',
        text: 'I truly love the storytelling and the music from Alien Stage especially hearing Ivan and Tills voice'
    },
    {
        username: 'swuachae',
        text: 'Thank you for everything you do!'
    },
    {
        username: 'severwdd',
        text: 'i fell in love with the music and animation'
    },
    { username: 'NovaShadow', text: 'Stunning animation!' },
    { username: 'StellarBloom', text: 'Till\'s growth is amazing' },
    { username: 'Skyline', text: 'Ivan on stage = magic' },
    { username: 'AetherLily', text: 'I\'m crying again…' },
    { username: 'SilverHaze', text: 'This show heals me' },
    {
        username: 'aussy',
        text: 'Please let the authors know I love their work!'
    },
    {
        username: 'tyshen',
        text: 'I love how the author depict emotions'
    },
    {
        username: 'zzyoe_xli',
        text: 'Alien Stage to me is a masterpiece'
    },
    {
        username: 'meeeep',
        text: 'I really love Till and Ivan. I’m so happy to see Till grow and heal during the last comic even though it was so sad to see Till realize he’s older than Ivan and that they were family.'
    },
    { username: 'VelvetStar', text: 'Till and Ivan forever!' },
    { username: 'AstroWave', text: 'Alien Stage = masterpiece' },
    { username: 'SerenLight', text: 'That scene broke my heart' },
    { username: 'MoonlitEcho', text: 'Pure emotions here' },
    { username: 'VividDreamer', text: 'Next season please!' },
    { username: 'AuroraMist', text: 'Obsessed with this!' },
    { username: 'NightGlow', text: 'The art blows me away!' },
    { username: 'Starfall', text: 'Ivan\'s stage power!!' },
    { username: 'CrystalWave', text: 'Emotions hit so hard' },
    { username: 'LunarEcho', text: 'Alien Stage owns my heart' },
    { username: 'ShadowRay', text: 'Every update is gold' },
    { username: 'VelviaMoon', text: 'Can\'t stop replaying' },
    { username: 'AeroSkyline', text: 'This story is unreal' },
    { username: 'DreamCatcher', text: 'Ivan shines so bright' },
    { username: 'MoonTrace', text: 'Till makes me cry again' },
    { username: 'SolarEdge', text: 'Alien Stage changed me' },
    { username: 'NovaDusk', text: 'The vibes are perfect' },
    { username: 'SeraphLight', text: 'Iconic duo Till & Ivan' },
    { username: 'Celestia', text: 'Such powerful voices!' },
    { username: 'MystEcho', text: 'This is pure genius' },
    { username: 'SkyNova', text: 'Till\'s healing arc 🥺' },
    { username: 'StellarRain', text: 'Always waiting for more!' },
    { username: 'FrostWing', text: 'Alien Stage is legendary' },
    { username: 'NebulaX', text: 'Ivan stole the show!' },
    { username: 'MoonVibe', text: 'Till keeps breaking me 😭' },
    { username: 'EchoStar', text: 'Ivan\'s voice = heaven' },
    { username: 'SkylineX', text: 'Can\'t move on from this' },
    { username: 'AetherNova', text: 'Alien Stage is unreal' },
    { username: 'Nightfall', text: 'Such raw emotions here' },
    { username: 'CrystalLyn', text: 'I\'m addicted already' },
    { username: 'VelvetEcho', text: 'Till deserves the world' },
    { username: 'DreamFlux', text: 'Ivan looks so stunning' },
    { username: 'LunarWing', text: 'This show owns my soul' },
    { username: 'FrostNova', text: 'The animation is insane!' },
    { username: 'NebulaRain', text: 'Alien Stage = perfection' },
    { username: 'StellarFox', text: 'I cried too hard again' },
    { username: 'Celeste', text: 'Ivan is breathtaking!' },
    { username: 'EchoDream', text: 'This story is art itself' },
    { username: 'NovaEdge', text: 'So proud of Till' },
    { username: 'StarryHaze', text: 'Alien Stage never fails' },
    { username: 'MoonEcho', text: 'Can\'t stop loving this!' }
]
