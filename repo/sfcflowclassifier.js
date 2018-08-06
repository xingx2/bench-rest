var flowclassifier_url = 'http://127.0.0.1:8181/controller/nb/v2/neutron/sfc/flowclassifiers';
var flowclassifier_post_json = {
    "flowclassifier": {
        "name": "flowclassifier1",
        "ethertype": "IPv4",
        "protocol": "udp",
        "source_port_range_min": 100,
        "source_port_range_max": 200,
        "destination_port_range_min": 100,
        "destination_port_range_max": 200,
        "source_ip_prefix": "10.0.0.0/24",
        "destination_ip_prefix": "11.0.0.0/24",
        "logical_source_port": "5e8e5957-649f-477b-9e5b-f1f75b21c03c",
        "logical_destination_port": "6e8e5957-649f-477b-9e5b-f1f75b21c03c",
        "l7_parameters": [
            {
                "Key": "value"
            }
        ],
        "tenant_id": "4969c491a3c74ee4af974e6d800c62de",
        "id": "4e8e5957-649f-477b-9e5b-"+"#{INDEX}"
    }
}

var flowclassifier_put_json = {
        "flowclassifier": {
            "name": "flowclassifier-update",
            "ethertype": "IPv4",
            "protocol": "udp",
            "source_port_range_min": 100,
            "source_port_range_max": 200,
            "destination_port_range_min": 100,
            "destination_port_range_max": 200,
            "source_ip_prefix": "10.0.0.0/24",
            "destination_ip_prefix": "11.0.0.0/24",
            "logical_source_port": "5e8e5957-649f-477b-9e5b-f1f75b21c03c",
            "logical_destination_port": "6e8e5957-649f-477b-9e5b-f1f75b21c03c",
            "l7_parameters": [
                {
                    "Key": "value"
                }
            ],
            "tenant_id": "4969c491a3c74ee4af974e6d800c62de",
            "id": "4e8e5957-649f-477b-9e5b-"+"#{INDEX}"
        }
    
}


exports.flowclassifier_url = flowclassifier_url
exports.flowclassifier_post_json = flowclassifier_post_json
exports.flowclassifier_put_json = flowclassifier_put_json