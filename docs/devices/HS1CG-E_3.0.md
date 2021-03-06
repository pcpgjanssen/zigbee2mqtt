---
title: "HEIMAN HS1CG-E_3.0 control via MQTT"
description: "Integrate your HEIMAN HS1CG-E_3.0 via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/HS1CG-E_3.0.md)*

# HEIMAN HS1CG-E_3.0

| Model | HS1CG-E_3.0  |
| Vendor  | HEIMAN  |
| Description | Combustible gas sensor |
| Exposes | gas, battery_low, tamper, linkquality |
| Picture | ![HEIMAN HS1CG-E_3.0](../images/devices/HS1CG-E_3.0.jpg) |

## Notes

None


## Exposes

### Gas (binary)
Indicates whether the device detected gas.
Value can be found in the published state on the `gas` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` gas is ON, if `false` OFF.

### Battery_low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery_low is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

