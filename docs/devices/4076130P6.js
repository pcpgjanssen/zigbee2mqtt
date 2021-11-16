const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const extend = require('zigbee-herdsman-converters/lib/extend');
const e = exposes.presets;
const ea = exposes.access;

const definition = {
    zigbeeModel: ['4076130P6'], // The model ID from: Device with modelID 'lumi.sens' is not supported.
    model: '4076130P6', // Vendor model number, look on the device for a model number
    vendor: 'Philips', // Vendor of the device (only used for documentation and startup logging)
    description: 'Hue white ambiance suspension Cher black with bluetooth 3000lm', // Description of the device, copy from vendor site. (only used for documentation and startup logging)
    extend: extend.light_onoff_brightness_colortemp({colorTempRange: [153, 500]}),
};

module.exports = definition;