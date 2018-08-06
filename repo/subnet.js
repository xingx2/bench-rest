var subnet_url = 'http://127.0.0.1:8181/controller/nb/v2/neutron/subnets';
var subnet_post_json = {
    "subnet": {
        "name": "sub",
        "enable_dhcp": true,
        "network_id": "4e8e5957-649f-477b-9e5b-f1f75b21c03c",
        "tenant_id": "9bacb3c5d39d41a79512987f338cf177",
        "dns_nameservers": [
            "8.8.8.8"
        ],
        "allocation_pools": [
            {
                "start": "10.0.0.2",
                "end": "10.0.0.254"
            }
        ],
        "host_routes": [
            {
                "nexthop": "10.0.0.1",
                "destination": "0.0.0.0/0"
            },
            {
                "nexthop": "10.0.0.2",
                "destination": "192.168.0.0/24"
            }
        ],
        "ip_version": 4,
        "gateway_ip": "10.0.0.1",
        "cidr": "10.0.0.0/24",
        "id": "3b80198d-4f7b-4f77-9ef5-"+"#{INDEX}"
    }
}



var subnet_put_json = {
    "subnet": {
        "subnet": {
            "name": "sub_update",
            "enable_dhcp": true,
            "network_id": "4e8e5957-649f-477b-9e5b-f1f75b21c03c",
            "tenant_id": "9bacb3c5d39d41a79512987f338cf177",
            "dns_nameservers": [
                "8.8.8.8"
            ],
            "allocation_pools": [
                {
                    "start": "10.0.0.2",
                    "end": "10.0.0.254"
                }
            ],
            "host_routes": [
                {
                    "nexthop": "10.0.0.1",
                    "destination": "0.0.0.0/0"
                },
                {
                    "nexthop": "10.0.0.2",
                    "destination": "192.168.0.0/24"
                }
            ],
            "ip_version": 4,
            "gateway_ip": "10.0.0.1",
            "cidr": "10.0.0.0/24",
            "id": "3b80198d-4f7b-4f77-9ef5-"+"#{INDEX}"
        }
    }
}

exports.subnet_url = subnet_url
exports.subnet_post_json = subnet_post_json
exports.subnet_put_json = subnet_put_json