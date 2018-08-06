var gatewayconnection_url = 'http://127.0.0.1:8181/controller/nb/v2/neutron/l2gateway-connections';
var gatewayconnection_post_json = {
    "l2gateway_connection": {
        "port_id": "9ea656c7-c9b8-4474-94f3-3b0bc741d9a9",
        "gateway_id": "d3590f37-b072-4358-9719-71964d84a31c",
        "segmentation_id": 100,
        "network_id": "c69933c1-b472-44f9-8226-30dc4ffd454c",
        "id": "3b0ef8f4-82c7-44d4-a4fb-"+"#{INDEX}",
        "tenant_id": "45977fa2dbd7482098dd68d0d8970117"
    }
}

exports.gatewayconnection_url = gatewayconnection_url
exports.gatewayconnection_post_json = gatewayconnection_post_json