var securitygrouprule_url = 'http://127.0.0.1:8181/controller/nb/v2/neutron/security-group-rules';
var securitygrouprule_post_json = {
    "security_group_rule": {
        "remote_group_id": null,
        "direction": "ingress",
        "remote_ip_prefix": null,
        "protocol": "tcp",
        "ethertype": "IPv6",
        "tenant_id": "00f340c7c3b34ab7be1fc690c05a0275",
        "port_range_max": 77,
        "port_range_min": 77,
        "id": "9b4be7fa-e56e-40fb-9516-"+"#{INDEX}",
        "security_group_id": "b60490fe-60a5-40be-af63-1d641381b784"
    }
}



var securitygrouprule_put_json = {
        "security_group_rule": {
            "remote_group_id": null,
            "direction": "egress",
            "remote_ip_prefix": null,
            "protocol": "tcp",
            "ethertype": "IPv6",
            "tenant_id": "00f340c7c3b34ab7be1fc690c05a0275",
            "port_range_ma": 77,
            "port_range_min": 77,
            "id": "9b4be7fa-e56e-40fb-9516-"+"#{INDEX}",
            "security_group_id": "b60490fe-60a5-40be-af63-1d641381b784"
        }
    
}


exports.securitygrouprule_url = securitygrouprule_url
exports.securitygrouprule_post_json = securitygrouprule_post_json
exports.securitygrouprule_put_json = securitygrouprule_put_json