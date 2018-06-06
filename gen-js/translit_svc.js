//
// Autogenerated by Thrift Compiler (1.0.0-dev)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


//HELPER FUNCTIONS AND STRUCTURES

translit_svc_get_str_args = function(args) {
  this.str = null;
  this.lang = null;
  if (args) {
    if (args.str !== undefined && args.str !== null) {
      this.str = args.str;
    }
    if (args.lang !== undefined && args.lang !== null) {
      this.lang = args.lang;
    }
  }
};
translit_svc_get_str_args.prototype = {};
translit_svc_get_str_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.str = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.lang = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

translit_svc_get_str_args.prototype.write = function(output) {
  output.writeStructBegin('translit_svc_get_str_args');
  if (this.str !== null && this.str !== undefined) {
    output.writeFieldBegin('str', Thrift.Type.STRING, 1);
    output.writeString(this.str);
    output.writeFieldEnd();
  }
  if (this.lang !== null && this.lang !== undefined) {
    output.writeFieldBegin('lang', Thrift.Type.STRING, 2);
    output.writeString(this.lang);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

translit_svc_get_str_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
  }
};
translit_svc_get_str_result.prototype = {};
translit_svc_get_str_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

translit_svc_get_str_result.prototype.write = function(output) {
  output.writeStructBegin('translit_svc_get_str_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

translit_svcClient = function(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
};
translit_svcClient.prototype = {};
translit_svcClient.prototype.get_str = function(str, lang, callback) {
  this.send_get_str(str, lang, callback); 
  if (!callback) {
    return this.recv_get_str();
  }
};

translit_svcClient.prototype.send_get_str = function(str, lang, callback) {
  this.output.writeMessageBegin('get_str', Thrift.MessageType.CALL, this.seqid);
  var params = {
    str: str,
    lang: lang
  };
  var args = new translit_svc_get_str_args(params);
  args.write(this.output);
  this.output.writeMessageEnd();
  if (callback) {
    var self = this;
    this.output.getTransport().flush(true, function() {
      var result = null;
      try {
        result = self.recv_get_str();
      } catch (e) {
        result = e;
      }
      callback(result);
    });
  } else {
    return this.output.getTransport().flush();
  }
};

translit_svcClient.prototype.recv_get_str = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new translit_svc_get_str_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.success) {
    return result.success;
  }
  throw 'get_str failed: unknown result';
};