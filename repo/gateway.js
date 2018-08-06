var gateway_url = 'http://127.0.0.1:8181/controller/nb/v2/neutron/l2-gateways';
var gateway_post_json = {
    "l2_gateway": {
        "tenant_id": "45977fa2dbd7482098dd68d0d8970117",
        "name": "gateway1",
        "devices": [
            {
                "interfaces": [
                    {
                        "segmentation_id": [
                            100
                        ],
                        "name": "interface1"
                    }
                ],
                "id": "0a24b09a-88a1-4f2c-94e9-92515972a704",
                "device_name": "device1"
            }
        ],
        "id": "3b0ef8f4-82c7-44d4-a4fb-"+"#{INDEX}"
    }
}

var gateway_put_json = {
        "l2_gateway": {
            "tenant_id": "45977fa2dbd7482098dd68d0d8970117",
            "name": "gateway-update",
            "devices": [
                {
                    "interfaces": [
                        {
                            "segmentation_id": [
                                100,
                                50
                            ],
                            "name": "interface1"
                        }
                    ],
                    "id": "0a24b09a-88a1-4f2c-94e9-92515972a704",
                    "device_name": "device1"
                }
            ],
            "id": "3b0ef8f4-82c7-44d4-a4fb-"+"#{INDEX}"
        }
}


exports.gateway_url = gateway_url
exports.gateway_post_json = gateway_post_json
exports.gateway_put_json = gateway_put_json