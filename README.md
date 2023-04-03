[![Codacy Badge](https://app.codacy.com/project/badge/Grade/bbf5985110954a4c9a1be87700a77d2e)](https://www.codacy.com/gh/Countly/countly-sdk-rnb-example/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Countly/countly-sdk-rnb-example&amp;utm_campaign=Badge_Grade)

## Countly React Native Bridge SDK test application

This repository includes example projects of React Native to demonstrate how to use [Countly React Native Bridge SDK](https://github.com/Countly/countly-sdk-react-native-bridge).

## What is Countly?
[Countly](https://count.ly) is a product analytics solution and innovation enabler that helps teams track product performance and customer journey and behavior across [mobile](https://count.ly/mobile-analytics), [web](http://count.ly/web-analytics),
and [desktop](https://count.ly/desktop-analytics) applications. [Ensuring privacy by design](https://count.ly/privacy-by-design), Countly allows you to innovate and enhance your products to provide personalized and customized customer experiences, and meet key business and revenue goals.

Track, measure, and take action - all without leaving Countly.

* **Questions or feature requests?** [Join the Countly Community on Discord](https://discord.gg/countly)
* **Looking for the Countly Server?** [Countly Community Edition repository](https://github.com/Countly/countly-server)
* **Looking for other Countly SDKs?** [An overview of all Countly SDKs for mobile, web and desktop](https://support.count.ly/hc/en-us/articles/360037236571-Downloading-and-Installing-SDKs#officially-supported-sdks)

## Using the test application

These test applications can be used to:

* Send a sample push notification
* Generate events with values and segmentations with count, sum, duration
* Send a sample user profile
* Send a custom user property
* Send a view (automatic or manual)
* Generate a crash (e.g out of bounds, null pointer, kill, etc or a custom crash log)

This app serves as a simple example for building an app using the [Countly React Native Bridge SDK](https://github.com/Countly/countly-sdk-react-native-bridge).

### Prerequisites
To run the Example App, you need to be able to build React Native apps for Android and iOS on your machine.
Refer to the [React Native getting started guide](https://reactnative.dev/docs/0.61/enviroment-setup) if you need help setting up your React Native environment.

For more information on how to acquire your application key (appKey) and server URL, check [here](https://support.count.ly/hc/en-us/articles/900000908046-Getting-started-with-SDKs#acquiring-your-application-key-and-server-url).

### Building
Clone this repository
```sh
git clone https://github.com/Countly/countly-sdk-rnb-example.git
cd countly-sdk-rnb-example/CountlyRNExample
```
Open `App.tsx` and update `"YOUR_API_KEY"` with your Countly application Key and `"https://try.count.ly"` with your server URL.

Run below to install dependencies and run your application on a simulator.
```sh
npm install
cd ios
pod install
cd ../
npx react-native run-ios (or run-android)
```

If your installation fails due to Ruby version not matching,
Check the required ruby version in `.ruby-version` and run
```sh
rvm install "ruby-2.7.6";
rvm use "ruby-2.7.6"
```

### Using local SDK
Clone the SDK repository and compress to `.tar.gz` file type
```sh
git clone https://github.com/Countly/countly-sdk-react-native-bridge.git
cd countly-sdk-react-native-bridge
npm pack
```
In the package.json for this test application, change 

`"countly-sdk-react-native-bridge": "22.6.5"` to 

`"countly-sdk-react-native-bridge": "file://../../sdk/countly-sdk-react-native-bridge.tgz"`

where `file://../../` is the relative path to the compressed local sdk.

Run below to install dependencies and run your application on a simulator.
```sh
npm install
cd ios
pod install
cd ../
npx react-native run-ios (or run-android)
```

## Security
Security is very important to us. If you discover any issue regarding security, please disclose the information responsibly by sending an email to security@count.ly and **not by creating a GitHub issue**.

## Badges
If you like Countly, [why not use one of our badges](https://count.ly/brand-assets) and give a link back to us so others know about this wonderful platform?

<a href="https://count.ly/f/badge" rel="nofollow"><img style="width:145px;height:60px" src="https://count.ly/badges/dark.svg?v2" alt="Countly - Product Analytics" /></a>

```JS
<a href="https://count.ly/f/badge" rel="nofollow"><img style="width:145px;height:60px" src="https://count.ly/badges/dark.svg" alt="Countly - Product Analytics" /></a>
```

<a href="https://count.ly/f/badge" rel="nofollow"><img style="width:145px;height:60px" src="https://count.ly/badges/light.svg?v2" alt="Countly - Product Analytics" /></a>

```JS
<a href="https://count.ly/f/badge" rel="nofollow"><img style="width:145px;height:60px" src="https://count.ly/badges/light.svg" alt="Countly - Product Analytics" /></a>
```

## How can I help you with your efforts?
Glad you asked! For community support, feature requests, and engaging with the Countly Community, please join us at [our Discord Server](https://discord.gg/countly). We're excited to have you there!

Also, we are on [Twitter](https://twitter.com/gocountly) and [LinkedIn](https://www.linkedin.com/company/countly) if you would like to keep up with Countly related updates.
