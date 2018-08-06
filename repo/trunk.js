var trunk_url = 'http://127.0.0.1:8181/controller/nb/v2/neutron/trunks';
var trunk_post_json = {
    "trunk": {
        "status": "DOWN",
        "name": "trunk1",
        "admin_state_up": true,
        "tenant_id": "cc3641789c8a4304abaa841c64f638d9",
        "port_id": "60aac28d-1d3a-48d9-99bc-dd4bd62e50f2",
        "sub_ports": [
            {
                "segmentation_type": "vlan",
                "port_id": "dca33436-2a7c-415b-aa35-14769e7834e3",
                "segmentation_id": 101
            },
            {
                "segmentation_type": "vlan",
                "port_id": "be28febe-bdff-45cc-8a2d-872d54e62527",
                "segmentation_id": 102
            }
        ],
        "id": "c935240e-4aa6-496a-841c-"+"#{INDEX}",
        "description": "test trunk0"
    }
}



var trunk_put_json = {
        "trunk": {
            "status": "DOWN",
            "name": "trunk-update",
            "admin_state_up": true,
            "tenant_id": "cc3641789c8a4304abaa841c64f638d9",
            "port_id": "60aac28d-1d3a-48d9-99bc-dd4bd62e50f2",
            "sub_ports": [
                {
                    "segmentation_type": "vlan",
                    "port_id": "dca33436-2a7c-415b-aa35-14769e7834e3",
                    "segmentation_id": 101
                },
                {
                    "segmentation_type": "vlan",
                    "port_id": "be28febe-bdff-45cc-8a2d-872d54e62527",
                    "segmentation_id": 102
                }
            ],
            "id": "c935240e-4aa6-496a-841c-"+"#{INDEX}",
            "description": "test trunk0"
        }
}

exports.trunk_url = trunk_url
exports.trunk_post_json = trunk_post_json
exports.trunk_put_json = trunk_put_json