[![Codacy Badge](https://app.codacy.com/project/badge/Grade/5632f066ad7646a7beec7f3b50000ee1)](https://www.codacy.com/gh/Countly/countly-sdk-cordova-example/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Countly/countly-sdk-cordova-example&amp;utm_campaign=Badge_Grade)

## Countly React Native

This repository includes example projects of React Native and Ionic to demonstrate how to use [Countly React Native SDK](https://github.com/Countly/countly-sdk-react-native-bridge).

## What is Countly?
[Countly](https://count.ly) is a product analytics solution and innovation enabler that helps teams track product performance and customer journey and behavior across [mobile](https://count.ly/mobile-analytics), [web](http://count.ly/web-analytics),
and [desktop](https://count.ly/desktop-analytics) applications. [Ensuring privacy by design](https://count.ly/privacy-by-design), Countly allows you to innovate and enhance your products to provide personalized and customized customer experiences, and meet key business and revenue goals.

Track, measure, and take action - all without leaving Countly.

* **Slack user?** [Join our Slack Community](https://slack.count.ly)
* **Questions or feature requests?** [Post in our Community Forum](https://support.count.ly/hc/en-us/community/topics)
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

This app serves as a simple example for building an app using the [Countly React Native SDK](https://github.com/Countly/countly-sdk-react-native-bridge).

### Prerequisites
To run the Example App, you need to be able to build React Native apps for Android and iOS on your machine.
Refer to the [React Native getting started guide](https://reactnative.dev/docs/0.61/enviroment-setup) if you need help setting up your React Native environment.

### Application key
Also called "appKey" as shorthand. The application key is used to identify for which application this information is tracked. You receive this value by creating a new application in your Countly dashboard and accessing it in its application management screen.

Note: Ensure you are using the App Key (found under Management -> Applications) and not the API Key. Entering the API Key will not work.

### Server URL
If you are using Countly Enterprise Edition trial servers, use https://try.count.ly, https://us-try.count.ly or https://asia-try.count.ly It is basically the domain from which you are accessing your trial dashboard.

If you use both Community Edition and Enterprise Edition, use your own domain name or IP address, such as https://example.com or https://IP (if SSL has been set up).

### Building
Clone this repository

```sh
git clone https://github.com/Countly/countly-sdk-rnb-example.git
cd countly-sdk-rnb-example/CountlyRNExample
```
Open `App.tsx` and update `"YOUR_API_KEY"` with your Countly application Key and `"https://try.count.ly"` with your server URL.
```sh
npm install
cd ios
pod install
cd ../
npx react-native run-ios (or run-android)
```

If it fails due to Ruby version not matching,
Check the required ruby version in `.ruby-version` and run
```sh
rvm install "ruby-2.7.6";
rvm use "ruby-2.7.6"
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
Glad you asked! We need ideas, feedback and constructive comments. All your suggestions will be taken care of with utmost importance. For feature requests and engaging with the community, join [our Slack Community](https://slack.count.ly) or [Community Forum](https://support.count.ly/hc/en-us/community/topics).

We are on [Twitter](http://twitter.com/gocountly), [Facebook](https://www.facebook.com/Countly) and [LinkedIn](https://www.linkedin.com/company/countly) if you would like to keep up with Countly related updates.