var network_url = 'http://127.0.0.1:8181/controller/nb/v2/neutron/networks';
var network_post_json = {
    "network": {
        "status": "ACTIVE",
        "subnets": [],
        "name": "net1",
        "router:external": false,
        "tenant_id": "9bacb3c5d39d41a79512987f338cf177",
        "segments": [
            {
                "provider:network_type": "vlan",
                "provider:physical_network": "8bab8453-1bc9-45af-8c70-f83aa9b50453",
                "provider:segmentation_id": 2
            },
            {
                "provider:network_type": "stt",
                "provider:physical_network": "8bab8453-1bc9-45af-8c70-f83aa9b50453",
                "provider:segmentation_id": null
            }
        ],
        "admin_state_up": true,
        "shared": false,
        "id": "4e8e5957-649f-477b-9e5b-"+"#{INDEX}"
    }
};


var network_put_json = {
    'network': {
        "network": {
            "id": "4e8e5957-649f-477b-9e5b-"+"#{INDEX}",
            "status": "ACTIVE",
            "subnets": [],
            "name": "net_update",
            "router:external": false,
            "tenant_id": "9bacb3c5d39d41a79512987f338cf177",
            "segments": [
                {
                    "provider:network_type": "vlan",
                    "provider:physical_network": "8bab8453-1bc9-45af-8c70-f83aa9b50453",
                    "provider:segmentation_id": 2
                },
                {
                    "provider:network_type": "stt",
                    "provider:physical_network": "8bab8453-1bc9-45af-8c70-f83aa9b50453",
                    "provider:segmentation_id": null
                }
            ],
            "admin_state_up": true,
            "shared": false
        }
    }
};

exports.network_url = network_url
exports.network_post_json = network_post_json
exports.network_put_json = network_put_json