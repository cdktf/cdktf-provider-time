// https://www.terraform.io/docs/providers/time/r/static
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StaticResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/static#rfc3339 StaticResource#rfc3339}
  */
  readonly rfc3339?: string;
  /**
  * Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved. See [the main provider documentation](../index.md) for more information.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/static#triggers StaticResource#triggers}
  */
  readonly triggers?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/time/r/static time_static}
*/
export class StaticResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "time_static";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/time/r/static time_static} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StaticResourceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: StaticResourceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'time_static',
      terraformGeneratorMetadata: {
        providerName: 'time',
        providerVersion: '0.9.0',
        providerVersionConstraint: '~> 0.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._rfc3339 = config.rfc3339;
    this._triggers = config.triggers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // day - computed: true, optional: false, required: false
  public get day() {
    return this.getNumberAttribute('day');
  }

  // hour - computed: true, optional: false, required: false
  public get hour() {
    return this.getNumberAttribute('hour');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // minute - computed: true, optional: false, required: false
  public get minute() {
    return this.getNumberAttribute('minute');
  }

  // month - computed: true, optional: false, required: false
  public get month() {
    return this.getNumberAttribute('month');
  }

  // rfc3339 - computed: true, optional: true, required: false
  private _rfc3339?: string; 
  public get rfc3339() {
    return this.getStringAttribute('rfc3339');
  }
  public set rfc3339(value: string) {
    this._rfc3339 = value;
  }
  public resetRfc3339() {
    this._rfc3339 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfc3339Input() {
    return this._rfc3339;
  }

  // second - computed: true, optional: false, required: false
  public get second() {
    return this.getNumberAttribute('second');
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers?: { [key: string]: string }; 
  public get triggers() {
    return this.getStringMapAttribute('triggers');
  }
  public set triggers(value: { [key: string]: string }) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
  }

  // unix - computed: true, optional: false, required: false
  public get unix() {
    return this.getNumberAttribute('unix');
  }

  // year - computed: true, optional: false, required: false
  public get year() {
    return this.getNumberAttribute('year');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      rfc3339: cdktf.stringToTerraform(this._rfc3339),
      triggers: cdktf.hashMapper(cdktf.stringToTerraform)(this._triggers),
    };
  }
}
