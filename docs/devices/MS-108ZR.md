---
title: "Moes MS-108ZR control via MQTT"
description: "Integrate your Moes MS-108ZR via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/MS-108ZR.md)*

# Moes MS-108ZR

| Model | MS-108ZR  |
| Vendor  | Moes  |
| Description | Zigbee + RF curtain switch module |
| Exposes | cover (state, position), calibration_time, moving, motor_reversal, linkquality |
| Picture | ![Moes MS-108ZR](../images/devices/MS-108ZR.jpg) |

## Notes

### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*

* `invert_cover`: By default the position/tilt values mean: open = 100, closed = 0. This can be inverted by setting this option to true (so open = 0, close = 100).



## Exposes

### Cover 
The current state of this cover is in the published state under the `state` property (value is `OPEN` or `CLOSE`).
To control this cover publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "OPEN"}`, `{"state": "CLOSE"}`, `{"state": "STOP"}`.
It's not possible to read (`/get`) this value.
To change the position publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"position": VALUE}` where `VALUE` is a number between `0` and `100`.

### Calibration_time (numeric)
Value can be found in the published state on the `calibration_time` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"calibration_time": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"calibration_time": NEW_VALUE}`.

### Moving (enum)
Value can be found in the published state on the `moving` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `UP`, `STOP`, `DOWN`.

### Motor_reversal (binary)
Value can be found in the published state on the `motor_reversal` property.
To read (`/get`) the value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"motor_reversal": ""}`.
To write (`/set`) a value publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"motor_reversal": NEW_VALUE}`.
If value equals `ON` motor_reversal is ON, if `OFF` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

