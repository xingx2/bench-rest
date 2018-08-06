var firewallrule_url = 'http://127.0.0.1:8181/controller/nb/v2/neutron/fw/firewall_rules';
var firewallrule_post_json = {
    "firewall_rule": {
        "source_port_max": null,
        "protocol": "tcp",
        "name": "ALLOW_HTTP",
        "source_ip_address": null,
        "tenant_id": "45977fa2dbd7482098dd68d0d8970117",
        "enabled": true,
        "destination_port_max": "80",
        "source_port_min": null,
        "destination_port_min": "80",
        "ip_version": 4,
        "destination_ip_address": null,
        "firewall_policy_id": null,
        "shared": false,
        "action": "allow",
        "position": null,
        "id": "8722e0e0-9cc9-4490-9660-"+"#{INDEX}"
    }
}

var firewallrule_put_json = {
        "firewall_rule": {
            "source_port_max": null,
            "protocol": "tcp",
            "name": "ALLOW_HTTP",
            "source_ip_address": null,
            "tenant_id": "45977fa2dbd7482098dd68d0d8970117",
            "enabled": true,
            "destination_port_max": "80",
            "source_port_min": null,
            "destination_port_min": "80",
            "ip_version": 4,
            "destination_ip_address": null,
            "firewall_policy_id": null,
            "shared": true,
            "action": "allow",
            "position": null,
            "id": "8722e0e0-9cc9-4490-9660-"+"#{INDEX}"
        }
    
}


exports.firewallrule_url = firewallrule_url
exports.firewallrule_post_json = firewallrule_post_json
exports.firewallrule_put_json = firewallrule_put_json