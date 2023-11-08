/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
                pathname: '/photos/18971850/pexels-photo-18971850.jpeg'
            }
        ]
    }
}

module.exports = nextConfig
/*Error: Invalid src prop (https://images.pexels.com/photos/18971850/pexels-photo-18971850.jpeg?auto=compress&cs=tinysrgb&h=350) on `next/image`, hostname "images.pexels.com" is not configured under images in your `next.config.js`
See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host*/

//'https://images.pexels.com18971850/pexels-photo-18971850.jpeg?auto=compress&cs=tinysrgb&h=350' photolocation