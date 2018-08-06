var port_url = 'http://127.0.0.1:8181/controller/nb/v2/neutron/ports';
var port_post_json = {
    "port": {
        "status": "DOWN",
        "binding:host_id": "",
        "name": "private-port",
        "allowed_address_pairs": [],
        "admin_state_up": true,
        "network_id": "4e8e5957-649f-477b-9e5b-f1f75b21c03c",
        "tenant_id": "9bacb3c5d39d41a79512987f338cf177",
        "binding:vif_details": {},
        "binding:vnic_type": "normal",
        "binding:vif_type": "unbound",
        "device_owner": "",
        "mac_address": "fa:16:3e:c9:cb:f0",
        "binding:profile": {},
        "port_security_enabled": true,
        "fixed_ips": [
            {
                "subnet_id": "3b80198d-4f7b-4f77-9ef5-774d54e17126",
                "ip_address": "10.0.0.2"
            }
        ],
        "id": "65c0ee9f-d634-4522-8954-"+"#{INDEX}",
        "security_groups": [],
        "device_id": ""
    }
}



var port_put_json = {
    "id": "65c0ee9f-d634-4522-8954-"+"#{INDEX}",
    "port": {
        "port": {
            "status": "DOWN",
            "binding:host_id": "",
            "name": "private-port-update",
            "allowed_address_pairs": [],
            "admin_state_up": true,
            "network_id": "4e8e5957-649f-477b-9e5b-f1f75b21c03c",
            "tenant_id": "9bacb3c5d39d41a79512987f338cf177",
            "binding:vif_details": {},
            "binding:vnic_type": "normal",
            "binding:vif_type": "unbound",
            "device_owner": "",
            "mac_address": "fa:16:3e:c9:cb:f0",
            "binding:profile": {},
            "port_security_enabled": true,
            "fixed_ips": [
                {
                    "subnet_id": "3b80198d-4f7b-4f77-9ef5-774d54e17126",
                    "ip_address": "10.0.0.2"
                }
            ],
            "id": "65c0ee9f-d634-4522-8954-"+"#{INDEX}",
            "security_groups": [],
            "device_id": ""
        }
    }
}


exports.port_url = port_url
exports.port_post_json = port_post_json
exports.port_put_json = port_put_json