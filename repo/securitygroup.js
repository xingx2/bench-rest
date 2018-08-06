var securitygroup_url = 'http://127.0.0.1:8181/controller/nb/v2/neutron/security-groups';
var securitygroup_post_json = {
    "security_group": {
        "tenant_id": "1dfe7dffa0624ae882cdbda397d1d276",
        "description": "",
        "id": "521e29d6-67b8-4b3c-8633-"+"#{INDEX}",
        "security_group_rules": [
            {
                "remote_group_id": null,
                "direction": "egress",
                "remote_ip_prefix": null,
                "protocol": null,
                "ethertype": "IPv4",
                "tenant_id": "1dfe7dffa0624ae882cdbda397d1d276",
                "port_range_max": null,
                "port_range_min": null,
                "id": "823faaf7-175d-4f01-a271-0bf56fb1e7e6",
                "security_group_id": "d3329053-bae5-4bf4-a2d1-7330f11ba5db"
            },
            {
                "remote_group_id": null,
                "direction": "egress",
                "remote_ip_prefix": null,
                "protocol": null,
                "ethertype": "IPv6",
                "tenant_id": "1dfe7dffa0624ae882cdbda397d1d276",
                "port_range_max": null,
                "port_range_min": null,
                "id": "d3329053-bae5-4bf4-a2d1-7330f11ba5db",
                "security_group_id": "d3329053-bae5-4bf4-a2d1-7330f11ba5db"
            }
        ],
        "name": "tempest-secgroup-1272206251"
    }
}

var securitygroup_put_json = {
        "security_group": {
            "tenant_id": "00f340c7c3b34ab7be1fc690c05a0275",
            "description": "tempest-security-description-897433715",
            "id": "521e29d6-67b8-4b3c-8633-"+"#{INDEX}",
            "security_group_rules": [
                {
                    "remote_group_id": null,
                    "direction": "egress",
                    "remote_ip_prefix": null,
                    "protocol": null,
                    "ethertype": "IPv4",
                    "tenant_id": "00f340c7c3b34ab7be1fc690c05a0275",
                    "port_range_max": null,
                    "port_range_min": null,
                    "id": "808bcefb-9917-4640-be68-14157bf33288",
                    "security_group_id": "521e29d6-67b8-4b3c-8633-027d21195333"
                },
                {
                    "remote_group_id": null,
                    "direction": "egress",
                    "remote_ip_prefix": null,
                    "protocol": null,
                    "ethertype": "IPv6",
                    "tenant_id": "00f340c7c3b34ab7be1fc690c05a0275",
                    "port_range_max": null,
                    "port_range_min": null,
                    "id": "c376f7b5-a281-40e0-a703-5c832c03aeb3",
                    "security_group_id": "521e29d6-67b8-4b3c-8633-027d21195333"
                }
            ],
            "name": "tempest-security--1135434738"
        }
    
}

exports.securitygroup_url = securitygroup_url
exports.securitygroup_post_json = securitygroup_post_json
exports.securitygroup_put_json = securitygroup_put_json