var firewallpolicy_url = 'http://127.0.0.1:8181/controller/nb/v2/neutron/fw/firewall_policies';
var firewallpolicy_post_json = {
    "firewall_policy": {
        "name": "policy1",
        "firewall_rules": [
            "8722e0e0-9cc9-4490-9660-8c9a5732fbb0"
        ],
        "tenant_id": "45977fa2dbd7482098dd68d0d8970117",
        "audited": false,
        "shared": false,
        "id": "c69933c1-b472-44f9-8226-"+"#{INDEX}",
        "description": ""
    }
}

var firewallpolicy_put_json = {
        "firewall_policy": {
            "name": "policy-update",
            "firewall_rules": [
                "a08ef905-0ff6-4784-8374-175fffe7dade",
                "8722e0e0-9cc9-4490-9660-8c9a5732fbb0"
            ],
            "tenant_id": "45977fa2dbd7482098dd68d0d8970117",
            "audited": false,
            "shared": false,
            "id": "c69933c1-b472-44f9-8226-"+"#{INDEX}",
            "description": ""
        }
    
}


exports.firewallpolicy_url = firewallpolicy_url
exports.firewallpolicy_post_json = firewallpolicy_post_json
exports.firewallpolicy_put_json = firewallpolicy_put_json