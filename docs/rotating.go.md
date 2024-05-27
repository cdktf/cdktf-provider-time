# `rotating` Submodule <a name="`rotating` Submodule" id="@cdktf/provider-time.rotating"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Rotating <a name="Rotating" id="@cdktf/provider-time.rotating.Rotating"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/time/0.11.1/docs/resources/rotating time_rotating}.

#### Initializers <a name="Initializers" id="@cdktf/provider-time.rotating.Rotating.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-time-go/time/rotating"

rotating.NewRotating(scope Construct, id *string, config RotatingConfig) Rotating
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-time.rotating.RotatingConfig">RotatingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-time.rotating.Rotating.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-time.rotating.RotatingConfig">RotatingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRfc3339">ResetRfc3339</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRotationDays">ResetRotationDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRotationHours">ResetRotationHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRotationMinutes">ResetRotationMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRotationMonths">ResetRotationMonths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRotationRfc3339">ResetRotationRfc3339</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetRotationYears">ResetRotationYears</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.resetTriggers">ResetTriggers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-time.rotating.Rotating.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-time.rotating.Rotating.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-time.rotating.Rotating.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-time.rotating.Rotating.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-time.rotating.Rotating.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-time.rotating.Rotating.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-time.rotating.Rotating.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-time.rotating.Rotating.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-time.rotating.Rotating.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-time.rotating.Rotating.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-time.rotating.Rotating.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-time.rotating.Rotating.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-time.rotating.Rotating.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-time.rotating.Rotating.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-time.rotating.Rotating.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-time.rotating.Rotating.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-time.rotating.Rotating.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-time.rotating.Rotating.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-time.rotating.Rotating.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-time.rotating.Rotating.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-time.rotating.Rotating.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.rotating.Rotating.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-time.rotating.Rotating.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-time.rotating.Rotating.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.rotating.Rotating.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.rotating.Rotating.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-time.rotating.Rotating.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.rotating.Rotating.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-time.rotating.Rotating.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.rotating.Rotating.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-time.rotating.Rotating.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-time.rotating.Rotating.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-time.rotating.Rotating.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-time.rotating.Rotating.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.rotating.Rotating.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetRfc3339` <a name="ResetRfc3339" id="@cdktf/provider-time.rotating.Rotating.resetRfc3339"></a>

```go
func ResetRfc3339()
```

##### `ResetRotationDays` <a name="ResetRotationDays" id="@cdktf/provider-time.rotating.Rotating.resetRotationDays"></a>

```go
func ResetRotationDays()
```

##### `ResetRotationHours` <a name="ResetRotationHours" id="@cdktf/provider-time.rotating.Rotating.resetRotationHours"></a>

```go
func ResetRotationHours()
```

##### `ResetRotationMinutes` <a name="ResetRotationMinutes" id="@cdktf/provider-time.rotating.Rotating.resetRotationMinutes"></a>

```go
func ResetRotationMinutes()
```

##### `ResetRotationMonths` <a name="ResetRotationMonths" id="@cdktf/provider-time.rotating.Rotating.resetRotationMonths"></a>

```go
func ResetRotationMonths()
```

##### `ResetRotationRfc3339` <a name="ResetRotationRfc3339" id="@cdktf/provider-time.rotating.Rotating.resetRotationRfc3339"></a>

```go
func ResetRotationRfc3339()
```

##### `ResetRotationYears` <a name="ResetRotationYears" id="@cdktf/provider-time.rotating.Rotating.resetRotationYears"></a>

```go
func ResetRotationYears()
```

##### `ResetTriggers` <a name="ResetTriggers" id="@cdktf/provider-time.rotating.Rotating.resetTriggers"></a>

```go
func ResetTriggers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Rotating resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-time.rotating.Rotating.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-time-go/time/rotating"

rotating.Rotating_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-time.rotating.Rotating.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-time.rotating.Rotating.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-time-go/time/rotating"

rotating.Rotating_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-time.rotating.Rotating.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-time.rotating.Rotating.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-time-go/time/rotating"

rotating.Rotating_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-time.rotating.Rotating.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-time.rotating.Rotating.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-time-go/time/rotating"

rotating.Rotating_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Rotating resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-time.rotating.Rotating.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-time.rotating.Rotating.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Rotating to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-time.rotating.Rotating.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Rotating that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/time/0.11.1/docs/resources/rotating#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.rotating.Rotating.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Rotating to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.day">Day</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.hour">Hour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.minute">Minute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.month">Month</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.second">Second</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.unix">Unix</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.year">Year</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rfc3339Input">Rfc3339Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationDaysInput">RotationDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationHoursInput">RotationHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationMinutesInput">RotationMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationMonthsInput">RotationMonthsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationRfc3339Input">RotationRfc3339Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationYearsInput">RotationYearsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.triggersInput">TriggersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rfc3339">Rfc3339</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationDays">RotationDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationHours">RotationHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationMinutes">RotationMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationMonths">RotationMonths</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationRfc3339">RotationRfc3339</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.rotationYears">RotationYears</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.triggers">Triggers</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-time.rotating.Rotating.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-time.rotating.Rotating.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-time.rotating.Rotating.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-time.rotating.Rotating.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-time.rotating.Rotating.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-time.rotating.Rotating.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-time.rotating.Rotating.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-time.rotating.Rotating.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-time.rotating.Rotating.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-time.rotating.Rotating.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-time.rotating.Rotating.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-time.rotating.Rotating.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-time.rotating.Rotating.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-time.rotating.Rotating.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-time.rotating.Rotating.property.day"></a>

```go
func Day() *f64
```

- *Type:* *f64

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktf/provider-time.rotating.Rotating.property.hour"></a>

```go
func Hour() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-time.rotating.Rotating.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktf/provider-time.rotating.Rotating.property.minute"></a>

```go
func Minute() *f64
```

- *Type:* *f64

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-time.rotating.Rotating.property.month"></a>

```go
func Month() *f64
```

- *Type:* *f64

---

##### `Second`<sup>Required</sup> <a name="Second" id="@cdktf/provider-time.rotating.Rotating.property.second"></a>

```go
func Second() *f64
```

- *Type:* *f64

---

##### `Unix`<sup>Required</sup> <a name="Unix" id="@cdktf/provider-time.rotating.Rotating.property.unix"></a>

```go
func Unix() *f64
```

- *Type:* *f64

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-time.rotating.Rotating.property.year"></a>

```go
func Year() *f64
```

- *Type:* *f64

---

##### `Rfc3339Input`<sup>Optional</sup> <a name="Rfc3339Input" id="@cdktf/provider-time.rotating.Rotating.property.rfc3339Input"></a>

```go
func Rfc3339Input() *string
```

- *Type:* *string

---

##### `RotationDaysInput`<sup>Optional</sup> <a name="RotationDaysInput" id="@cdktf/provider-time.rotating.Rotating.property.rotationDaysInput"></a>

```go
func RotationDaysInput() *f64
```

- *Type:* *f64

---

##### `RotationHoursInput`<sup>Optional</sup> <a name="RotationHoursInput" id="@cdktf/provider-time.rotating.Rotating.property.rotationHoursInput"></a>

```go
func RotationHoursInput() *f64
```

- *Type:* *f64

---

##### `RotationMinutesInput`<sup>Optional</sup> <a name="RotationMinutesInput" id="@cdktf/provider-time.rotating.Rotating.property.rotationMinutesInput"></a>

```go
func RotationMinutesInput() *f64
```

- *Type:* *f64

---

##### `RotationMonthsInput`<sup>Optional</sup> <a name="RotationMonthsInput" id="@cdktf/provider-time.rotating.Rotating.property.rotationMonthsInput"></a>

```go
func RotationMonthsInput() *f64
```

- *Type:* *f64

---

##### `RotationRfc3339Input`<sup>Optional</sup> <a name="RotationRfc3339Input" id="@cdktf/provider-time.rotating.Rotating.property.rotationRfc3339Input"></a>

```go
func RotationRfc3339Input() *string
```

- *Type:* *string

---

##### `RotationYearsInput`<sup>Optional</sup> <a name="RotationYearsInput" id="@cdktf/provider-time.rotating.Rotating.property.rotationYearsInput"></a>

```go
func RotationYearsInput() *f64
```

- *Type:* *f64

---

##### `TriggersInput`<sup>Optional</sup> <a name="TriggersInput" id="@cdktf/provider-time.rotating.Rotating.property.triggersInput"></a>

```go
func TriggersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Rfc3339`<sup>Required</sup> <a name="Rfc3339" id="@cdktf/provider-time.rotating.Rotating.property.rfc3339"></a>

```go
func Rfc3339() *string
```

- *Type:* *string

---

##### `RotationDays`<sup>Required</sup> <a name="RotationDays" id="@cdktf/provider-time.rotating.Rotating.property.rotationDays"></a>

```go
func RotationDays() *f64
```

- *Type:* *f64

---

##### `RotationHours`<sup>Required</sup> <a name="RotationHours" id="@cdktf/provider-time.rotating.Rotating.property.rotationHours"></a>

```go
func RotationHours() *f64
```

- *Type:* *f64

---

##### `RotationMinutes`<sup>Required</sup> <a name="RotationMinutes" id="@cdktf/provider-time.rotating.Rotating.property.rotationMinutes"></a>

```go
func RotationMinutes() *f64
```

- *Type:* *f64

---

##### `RotationMonths`<sup>Required</sup> <a name="RotationMonths" id="@cdktf/provider-time.rotating.Rotating.property.rotationMonths"></a>

```go
func RotationMonths() *f64
```

- *Type:* *f64

---

##### `RotationRfc3339`<sup>Required</sup> <a name="RotationRfc3339" id="@cdktf/provider-time.rotating.Rotating.property.rotationRfc3339"></a>

```go
func RotationRfc3339() *string
```

- *Type:* *string

---

##### `RotationYears`<sup>Required</sup> <a name="RotationYears" id="@cdktf/provider-time.rotating.Rotating.property.rotationYears"></a>

```go
func RotationYears() *f64
```

- *Type:* *f64

---

##### `Triggers`<sup>Required</sup> <a name="Triggers" id="@cdktf/provider-time.rotating.Rotating.property.triggers"></a>

```go
func Triggers() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.rotating.Rotating.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-time.rotating.Rotating.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RotatingConfig <a name="RotatingConfig" id="@cdktf/provider-time.rotating.RotatingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-time.rotating.RotatingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-time-go/time/rotating"

&rotating.RotatingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Rfc3339: *string,
	RotationDays: *f64,
	RotationHours: *f64,
	RotationMinutes: *f64,
	RotationMonths: *f64,
	RotationRfc3339: *string,
	RotationYears: *f64,
	Triggers: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rfc3339">Rfc3339</a></code> | <code>*string</code> | Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rotationDays">RotationDays</a></code> | <code>*f64</code> | Number of days to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rotationHours">RotationHours</a></code> | <code>*f64</code> | Number of hours to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rotationMinutes">RotationMinutes</a></code> | <code>*f64</code> | Number of minutes to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rotationMonths">RotationMonths</a></code> | <code>*f64</code> | Number of months to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rotationRfc3339">RotationRfc3339</a></code> | <code>*string</code> | Configure the rotation timestamp with an [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format of the offset timestamp. When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.rotationYears">RotationYears</a></code> | <code>*f64</code> | Number of years to add to the base timestamp to configure the rotation timestamp. |
| <code><a href="#@cdktf/provider-time.rotating.RotatingConfig.property.triggers">Triggers</a></code> | <code>*map[string]*string</code> | Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-time.rotating.RotatingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-time.rotating.RotatingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-time.rotating.RotatingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-time.rotating.RotatingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-time.rotating.RotatingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-time.rotating.RotatingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-time.rotating.RotatingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Rfc3339`<sup>Optional</sup> <a name="Rfc3339" id="@cdktf/provider-time.rotating.RotatingConfig.property.rfc3339"></a>

```go
Rfc3339 *string
```

- *Type:* *string

Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.1/docs/resources/rotating#rfc3339 Rotating#rfc3339}

---

##### `RotationDays`<sup>Optional</sup> <a name="RotationDays" id="@cdktf/provider-time.rotating.RotatingConfig.property.rotationDays"></a>

```go
RotationDays *f64
```

- *Type:* *f64

Number of days to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.1/docs/resources/rotating#rotation_days Rotating#rotation_days}

---

##### `RotationHours`<sup>Optional</sup> <a name="RotationHours" id="@cdktf/provider-time.rotating.RotatingConfig.property.rotationHours"></a>

```go
RotationHours *f64
```

- *Type:* *f64

Number of hours to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.1/docs/resources/rotating#rotation_hours Rotating#rotation_hours}

---

##### `RotationMinutes`<sup>Optional</sup> <a name="RotationMinutes" id="@cdktf/provider-time.rotating.RotatingConfig.property.rotationMinutes"></a>

```go
RotationMinutes *f64
```

- *Type:* *f64

Number of minutes to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.1/docs/resources/rotating#rotation_minutes Rotating#rotation_minutes}

---

##### `RotationMonths`<sup>Optional</sup> <a name="RotationMonths" id="@cdktf/provider-time.rotating.RotatingConfig.property.rotationMonths"></a>

```go
RotationMonths *f64
```

- *Type:* *f64

Number of months to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.1/docs/resources/rotating#rotation_months Rotating#rotation_months}

---

##### `RotationRfc3339`<sup>Optional</sup> <a name="RotationRfc3339" id="@cdktf/provider-time.rotating.RotatingConfig.property.rotationRfc3339"></a>

```go
RotationRfc3339 *string
```

- *Type:* *string

Configure the rotation timestamp with an [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format of the offset timestamp. When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.1/docs/resources/rotating#rotation_rfc3339 Rotating#rotation_rfc3339}

---

##### `RotationYears`<sup>Optional</sup> <a name="RotationYears" id="@cdktf/provider-time.rotating.RotatingConfig.property.rotationYears"></a>

```go
RotationYears *f64
```

- *Type:* *f64

Number of years to add to the base timestamp to configure the rotation timestamp.

When the current time has passed the rotation timestamp, the resource will trigger recreation. At least one of the 'rotation_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.1/docs/resources/rotating#rotation_years Rotating#rotation_years}

---

##### `Triggers`<sup>Optional</sup> <a name="Triggers" id="@cdktf/provider-time.rotating.RotatingConfig.property.triggers"></a>

```go
Triggers *map[string]*string
```

- *Type:* *map[string]*string

Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved.

These conditions recreate the resource in addition to other rotation arguments. See [the main provider documentation](../index.md) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.11.1/docs/resources/rotating#triggers Rotating#triggers}

---



