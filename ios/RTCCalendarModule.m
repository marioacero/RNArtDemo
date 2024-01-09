//
//  RTCCalendarModule.m
//  RNArt
//
//  Created by Mario Acero on 2024-01-08.
//
#import <Foundation/Foundation.h>
#import "RCTCalendarModule.h"
#import <React/RCTLog.h>
#import <EventKit/EventKit.h>

@implementation RCTCalendarModule

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)title date:(NSString *)dateString) {
    RCTLogInfo(@"Pretending to create an event %@ at %@", title, dateString);
    EKEventStore *eventStore = [[EKEventStore alloc] init];
    
    EKEvent *event = [EKEvent eventWithEventStore:eventStore];
    event.title = title;

    NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
    [dateFormatter setDateFormat:@"yyyy-MM-dd HH:mm"];
    NSDate *date = [dateFormatter dateFromString:dateString];

    event.startDate = date;
    event.endDate = [date dateByAddingTimeInterval:60*60]; // Duration of 1 hour

    [event setCalendar:[eventStore defaultCalendarForNewEvents]];

    NSError *saveError = nil;
    [eventStore saveEvent:event span:EKSpanThisEvent error:&saveError];

    if (!saveError) {
      RCTLogInfo(@"Event added successfully");
      // Show alert confirmation
      dispatch_async(dispatch_get_main_queue(), ^{
          UIAlertController *alertController = [UIAlertController
              alertControllerWithTitle:@"Event Added"
                               message:@"The event has been added to the calendar."
                        preferredStyle:UIAlertControllerStyleAlert];

          UIAlertAction *okAction = [UIAlertAction
              actionWithTitle:@"OK"
                        style:UIAlertActionStyleDefault
                      handler:^(UIAlertAction *action) {
                          // Handle OK button press if needed
                      }];

          [alertController addAction:okAction];

          // Find the most suitable view controller
          UIViewController *rootViewController = [UIApplication sharedApplication].delegate.window.rootViewController;
          while (rootViewController.presentedViewController) {
              rootViewController = rootViewController.presentedViewController;
          }

          [rootViewController presentViewController:alertController animated:YES completion:nil];
      });
    } else {
      RCTLogInfo(@"Error adding event: %@", saveError);
    }
}

@end
