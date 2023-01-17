/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Button,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{justifyContent: 'center', alignItems: 'center', margin: 20}}>
          <Image
            source={{uri: 'https://count.ly/images/logos/countly-logo.png'}}
            style={{width: 144, height: 42}}
            onError={e => console.log(e.nativeEvent.error)}
          />
          <Text style={[{fontSize: 24, textAlign: 'center'}]}>
            React Native Demo App
          </Text>
        </View>
        < Button onPress = { this.test } title = "Test" color = "#1b1c1d"> </Button>
            < Button onPress = { this.onInit } title = "Init"> </Button>
            < Button onPress = { this.onStart } title = "Start" color = "#5bbd72"> </Button>
            < Button onPress = { this.onStop } title = "Stop" color = "#d95c5c"> </Button>

            <Text style={[{textAlign: 'center'}]}>.</Text>
            <Text style={[{textAlign: 'center'}]}>Events Start</Text>

            < Button onPress = { this.basicEvent } title = "Basic Events" color = "#e0e0e0"> </Button>
            < Button onPress = { this.eventWithSum } title = "Event with Sum" color = "#e0e0e0"> </Button>
            < Button onPress = { this.eventWithSegment } title = "Event with Segment" color = "#e0e0e0"> </Button>
            < Button onPress = { this.eventWithSumAndSegment } title = "Even with Sum and Segment" color = "#841584"> </Button>
            < Button onPress = { this.startEvent } title = "Timed event" color = "#e0e0e0"> </Button>
            < Button onPress = { this.timedEventWithSum } title = "Timed events with Sum" color = "#e0e0e0"> </Button>
            < Button onPress = { this.timedEventWithSegment } title = "Timed events with Segment" color = "#e0e0e0"> </Button>
            < Button onPress = { this.timedEventWithSumAndSegment } title = "Timed events with Sum and Segment" color = "#e0e0e0"> </Button>



            <Text style={[{textAlign: 'center'}]}>Events End</Text>
            <Text style={[{textAlign: 'center'}]}>.</Text>

            <Text style={[{textAlign: 'center'}]}>2017</Text>
            <Text style={[{textAlign: 'center'}]}>User Methods Start</Text>

            < Button onPress = { this.onSendUserData } title = "Send Users Data" color = "#00b5ad"> </Button>
            < Button onPress = { this.onUpdateUserData } title = "Update Users Data" color = "#00b5ad"> </Button>
            < Button onPress = { this.userData_setProperty } title = "UserData.setProperty" color = "#00b5ad"> </Button>
            < Button onPress = { this.userData_increment } title = "UserData.increment" color = "#00b5ad"> </Button>
            < Button onPress = { this.userData_incrementBy } title = "UserData.incrementBy" color = "#00b5ad"> </Button>
            < Button onPress = { this.userData_multiply } title = "UserData.multiply" color = "#00b5ad"> </Button>
            < Button onPress = { this.userData_saveMax } title = "UserData.saveMax" color = "#00b5ad"> </Button>
            < Button onPress = { this.userData_saveMin } title = "UserData.saveMin" color = "#00b5ad"> </Button>
            < Button onPress = { this.userData_setOnce } title = "UserData.setOnce" color = "#00b5ad"> </Button>
            < Button onPress = { this.userData_pushUniqueValue } title = "UserData.pushUniqueValue" color = "#00b5ad"> </Button>
            < Button onPress = { this.userData_pushValue } title = "UserData.pushValue" color = "#00b5ad"> </Button>
            < Button onPress = { this.userData_pullValue } title = "UserData.pullValue" color = "#00b5ad"> </Button>


            < Button onPress = { this.onSetUserProperties } title = "Set Users Properties" color = "#00b5ad"> </Button>
            < Button onPress = { this.onSendUserDataBulk } title = "Send Users Data Bulk" color = "#00b5ad"> </Button>

            <Text style={[{textAlign: 'center'}]}>User Methods End</Text>
            <Text style={[{textAlign: 'center'}]}>.</Text>
            


            <Text style={[{textAlign: 'center'}]}>Other Methods Start</Text>
            < Button onPress = { function(){Countly.recordView("HomePage")} } title = "Record View: 'HomePage'" color = "#e0e0e0"> </Button>
            < Button onPress = { function(){Countly.recordView("Dashboard")} } title = "Record View: 'Dashboard'" color = "#e0e0e0"> </Button>
            < Button onPress = { function(){Countly.recordView("HomePage", {"version": "1.0", "_facebook_version": "0.0.1"})} } title = "Record View: 'HomePage' with Segment" color = "#e0e0e0"> </Button>
            < Button onPress = { this.setLocation } title = "Set Location" color = "#00b5ad"> </Button>
            < Button onPress = { this.disableLocation } title = "Disable Location" color = "#00b5ad"> </Button>
            < Button onPress = { this.showStarRating } title = "Show Star Rating Model" color = "#00b5ad"> </Button>
            < Button onPress = { this.presentRatingWidget } title = "Show FeedBack Model" color = "#00b5ad"> </Button>
            <TextInput style={styles.inputRoundedBorder} placeholder="Enter a Rating ID" 
            onChangeText={(ratingId) => this.setState({ ratingId })} 
            onSubmitEditing={(ratingId) => this.setState({ ratingId })}
            // value={this.state.ratingId} 
            />
            < Button 
            // disabled={!this.state.ratingId} 
            onPress = { this.presentRatingWidgetUsingEditBox } title = "Show Feedback using EditBox" color = "#00b5ad"> </Button>  
            < Button onPress = { this.showSurvey } title = "Show Survey" color = "#00b5ad"> </Button>
            < Button onPress = { this.showNPS } title = "Show NPS" color = "#00b5ad"> </Button>
            < Button onPress = { this.eventSendThreshold } title = "Set Event Threshold" color = "#00b5ad"> </Button>
            < Button onPress = { this.setCustomCrashSegments } title = "Set Custom Crash Segment" color = "#00b5ad"> </Button>
            < Button onPress = { this.setCustomMetrics } title = "Set Custom Metrics" color = "#00b5ad"> </Button>
            <Text style={[{textAlign: 'center'}]}>Other Methods End</Text>
            <Text style={[{textAlign: 'center'}]}>.</Text>


            < Text style={[{ textAlign: 'center' }]}>Push Notification Start</Text>
            < Button onPress={this.askForNotificationPermission} title='askForNotificationPermission' color='#00b5ad' />
            < Button onPress={this.changeDeviceId} title='Change Device ID' color='#00b5ad' />
            < Text style={[{ textAlign: 'center' }]}>Push Notification End</Text>
            <Text style={[{textAlign: 'center'}]}>.</Text>


            < Text style={[{ textAlign: 'center' }]}>Consent Start</Text>
            < Button onPress = { this.giveAllConsent } title = "Give all Consent" color = "#00b5ad"> </Button>
            < Button onPress = { this.removeAllConsent } title = "Remove all Consent" color = "#00b5ad"> </Button>

            {/* Give Consent */}
            < Button onPress = { ()=>{ this.giveConsent("sessions") } } title = "Give sessions" color = "#00b5ad"> </Button>
            < Button onPress = { ()=>{ this.giveConsent("events") } } title = "Give events" color = "#00b5ad"> </Button>
            < Button onPress = { ()=>{ this.giveConsent("views") } } title = "Give views" color = "#00b5ad"> </Button>
            < Button onPress = { ()=>{ this.giveConsent("location") } } title = "Give location" color = "#00b5ad"> </Button>
            < Button onPress = { ()=>{ this.giveConsent("crashes") } } title = "Give crashes" color = "#00b5ad"> </Button>
            < Button onPress = { ()=>{ this.giveConsent("attribution") } } title = "Give attribution" color = "#00b5ad"> </Button>
            < Button onPress = { ()=>{ this.giveConsent("users") } } title = "Give users" color = "#00b5ad"> </Button>
            < Button onPress = { ()=>{ this.giveConsent("push") } } title = "Give push" color = "#00b5ad"> </Button>
            < Button onPress = { ()=>{ this.giveConsent("star-rating") } } title = "Give star-rating" color = "#00b5ad"> </Button>
            < Button onPress = { ()=>{ this.giveConsent("apm") } } title = "Give APM" color = "#00b5ad"> </Button>

            {/* Remove Consent */}

            < Button onPress = { ()=>{ this.removeConsent("sessions") } } title = "Remove sessions" color = "#00b5ad"> </Button>
            < Button onPress = { ()=>{ this.removeConsent("events") } } title = "Remove events" color = "#00b5ad"> </Button>
            < Button onPress = { ()=>{ this.removeConsent("views") } } title = "Remove views" color = "#00b5ad"> </Button>
            < Button onPress = { ()=>{ this.removeConsent("location") } } title = "Remove location" color = "#00b5ad"> </Button>
            < Button onPress = { ()=>{ this.removeConsent("crashes") } } title = "Remove crashes" color = "#00b5ad"> </Button>
            < Button onPress = { ()=>{ this.removeConsent("attribution") } } title = "Remove attribution" color = "#00b5ad"> </Button>
            < Button onPress = { ()=>{ this.removeConsent("users") } } title = "Remove users" color = "#00b5ad"> </Button>
            < Button onPress = { ()=>{ this.removeConsent("push") } } title = "Remove push" color = "#00b5ad"> </Button>
            < Button onPress = { ()=>{ this.removeConsent("star-rating") } } title = "Remove star-rating" color = "#00b5ad"> </Button>
            < Button onPress = { ()=>{ this.removeConsent("apm") } } title = "Remove APM" color = "#00b5ad"> </Button>


            < Button onPress = { this.giveMultipleConsent } title = "Give multiple consent" color = "#00b5ad"> </Button>
            < Button onPress = { this.removeMultipleConsent } title = "Remove multiple consent" color = "#00b5ad"> </Button>

            < Text style={[{ textAlign: 'center' }]}>Consent End</Text>
            <Text style={[{textAlign: 'center'}]}>.</Text>









            < Text style={[{ textAlign: 'center' }]}>Remote Config Start</Text>
            < Button onPress = { this.remoteConfigUpdate } title = "Update Remote Config" color = "#00b5ad"> </Button>
            < Button onPress = { this.updateRemoteConfigForKeysOnly } title = "Update Remote Config with Keys Only" color = "#00b5ad"> </Button>
            < Button onPress = { this.updateRemoteConfigExceptKeys } title = "Update Remote Config Except Keys" color = "#00b5ad"> </Button>

            < Button onPress = { this.getRemoteConfigValueForKeyBoolean } title = "Boolean Test" color = "#00b5ad"> </Button>
            < Button onPress = { this.getRemoteConfigValueForKeyFloat } title = "Float Test" color = "#00b5ad"> </Button>
            < Button onPress = { this.getRemoteConfigValueForKeyInteger } title = "Integer Test" color = "#00b5ad"> </Button>
            < Button onPress = { this.getRemoteConfigValueForKeyString } title = "String Test" color = "#00b5ad"> </Button>
            < Button onPress = { this.getRemoteConfigValueForKeyJSON } title = "JSON Test" color = "#00b5ad"> </Button>
            < Button onPress = { this.remoteConfigClearValues } title = "Clear remote config cache" color = "#00b5ad"> </Button>
            < Text style={[{ textAlign: 'center' }]}>Remote Config End</Text>
            <Text style={[{textAlign: 'center'}]}>.</Text>

            <Text style={[{textAlign: 'center'}]}>Crash Event start</Text>
            < Button onPress = { this.addCrashLog } title = "Add Crash Log" color = "#00b5ad"> </Button>
            <Text style={[{textAlign: 'center'}]}>Crash Event End</Text>
            <Text style={[{textAlign: 'center'}]}>.</Text>

            <Text style={[{textAlign: 'center'}]}>APM Example Start</Text>
            <Button onPress={ this.startTrace } title="Start Trace" color = "#1b1c1d"> </Button>
            <Button onPress={ this.endTrace } title="End Trace" color = "#1b1c1d"> </Button>
            <Button onPress={ this.recordNetworkTraceSuccess } title="End Network Request Success" color = "#1b1c1d"> </Button>
            <Button onPress={ this.recordNetworkTraceFailure } title="End Network Request Failure" color = "#1b1c1d"> </Button>
            <Text style={[{textAlign: 'center'}]}>APM Example Start</Text>
            <Text style={[{textAlign: 'center'}]}>.</Text>

            {/*
            < Button onPress = { this.testCrash } title = "Test Native Crash" color = "crimson"> </Button>
            */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
