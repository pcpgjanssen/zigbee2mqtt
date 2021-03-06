---
title: "Zemismart LXN56-SS27LX1.1 control via MQTT"
description: "Integrate your Zemismart LXN56-SS27LX1.1 via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/LXN56-SS27LX1.1.md)*

# Zemismart LXN56-SS27LX1.1

| Model | LXN56-SS27LX1.1  |
| Vendor  | Zemismart  |
| Description | Smart light switch - 2 gang with neutral wire |
| Exposes | switch (state), linkquality |
| Picture | ![Zemismart LXN56-SS27LX1.1](../images/devices/LXN56-SS27LX1.1.jpg) |

## Notes


## 2 distinct devices
This switch was 2 distinct Zigbee chips, so it's seen as 2 separate devices.



## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

