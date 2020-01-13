(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{219:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"clean-up"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clean-up","aria-hidden":"true"}},[s._v("#")]),s._v(" Clean-up")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/aws-samples/eks-workshop/65b766c494a5b4f5420b2912d8373c4957163541/static/images/cleanup.svg?sanitize=true",alt:"Clean-up",title:"Clean-up"}})]),s._v(" "),t("p",[s._v("Configure "),t("code",[s._v("kubeconfig")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MY_DOMAIN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mylabs.dev"')]),s._v("\nkops "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" kubecfg "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("}")]),s._v("-k8s."),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MY_DOMAIN}")]),s._v(" --state"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("s3://"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("}")]),s._v("-kops-k8s --kubeconfig /tmp/kubeconfig.conf\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KUBECONFIG")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/tmp/kubeconfig.conf\n")])])]),t("p",[s._v("Remove K8s cluster:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("kops delete cluster --name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("}")]),s._v("-k8s."),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MY_DOMAIN}")]),s._v(" --yes --state"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("s3://"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("}")]),s._v("-kops-k8s\n")])])]),t("p",[s._v("Output:")]),s._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('security-group:sg-06d46ba965803d316     ok\nsubnet:subnet-07ed5c1e194433a0f ok\nroute-table:rtb-01b1001514d69cfa4       ok\nvpc:vpc-0c76a222e55c511ed       ok\ndhcp-options:dopt-08ce550770088824c     ok\nDeleted kubectl config for pruzicka-k8s.mylabs.dev\n\nDeleted cluster: "pruzicka-k8s.mylabs.dev"\n')])])]),t("p",[s._v("Delete GitHub repository:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("hub delete -y ruzickap/k8s-flux-repository\n")])])]),t("p",[s._v("Output:")]),s._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Deleted repository 'ruzickap/k8s-flux-repository'.\n")])])]),t("p",[s._v("Remove S3 bucket used for storing the configuration by kops:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("aws s3api delete-bucket --bucket "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("}")]),s._v("-kops-k8s --region eu-central-1\n")])])]),t("p",[s._v("Clean Policy, User, Access Key in AWS:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# aws route53 delete-hosted-zone --id $(aws route53 list-hosted-zones --query "HostedZones[?Name==\\`${MY_DOMAIN}.\\`].Id" --output text)')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("POLICY_ARN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("aws iam list-policies --query "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Policies[?PolicyName==\\'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("-AmazonRoute53Domains-cert-manager"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v('].{ARN:Arn}"')]),s._v(" --output text"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\naws iam detach-user-policy --user-name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("}")]),s._v('-route53"')]),s._v(" --policy-arn "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${POLICY_ARN}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\naws iam delete-policy --policy-arn "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${POLICY_ARN}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("USER_ACCESS_KEYS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("aws iam list-access-keys --user-name $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("-route53 --query "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"AccessKeyMetadata[].AccessKeyId"')]),s._v(" --output text"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\naws iam delete-access-key --user-name "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("}")]),s._v("-route53 --access-key-id "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${USER_ACCESS_KEYS}")]),s._v("\n\naws iam delete-user --user-name "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("}")]),s._v("-route53\n")])])]),t("p",[s._v("Cleanup + Remove Helm:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /home/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("}")]),s._v("/.helm\n")])])]),t("p",[s._v("Docker certificate cleanup if exists:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /etc/docker/certs.d/harbor."),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MY_DOMAIN}")]),s._v("\n")])])]),t("p",[s._v("Docker clean-up:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" -d ~/.docker/ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.docker/\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DOCKER_IMAGES")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker images -q"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${DOCKER_IMAGES}")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" docker rmi --force "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${DOCKER_IMAGES}")]),s._v("\n")])])]),t("p",[s._v("Remove "),t("code",[s._v("tmp")]),s._v(" directory:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf tmp\n")])])]),t("p",[s._v("Remove other files:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" demo-magic.sh kubeconfig.conf README.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" /dev/null\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);