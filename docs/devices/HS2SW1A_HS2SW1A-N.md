---
title: "HEIMAN HS2SW1A/HS2SW1A-N control via MQTT"
description: "Integrate your HEIMAN HS2SW1A/HS2SW1A-N via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/HS2SW1A_HS2SW1A-N.md)*

# HEIMAN HS2SW1A/HS2SW1A-N

| Model | HS2SW1A/HS2SW1A-N  |
| Vendor  | HEIMAN  |
| Description | Smart switch - 1 gang with neutral wire |
| Exposes | switch (state), device_temperature, linkquality |
| Picture | ![HEIMAN HS2SW1A/HS2SW1A-N](../images/devices/HS2SW1A-HS2SW1A-N.jpg) |

## Notes

None


## Exposes

### Switch 
The current state of this switch is in the published state under the `state` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state": "ON"}`, `{"state": "OFF"}` or `{"state": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state": ""}`.

### Device_temperature (numeric)
Temperature of the device.
Value can be found in the published state on the `device_temperature` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The unit of this value is `°C`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

